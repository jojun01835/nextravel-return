import { ObjectId } from "mongodb";
import styles from "./page.module.css";
import { connectDB } from "@/util/database";

export default async function Detail(props) {
  const client = await connectDB;
  const db = client.db("shop");
  let result = await db.collection("top").findOne({ _id: new ObjectId(props.params.id) });
  return (
    <div className={styles.detail}>
      <h3 className={styles.h3}>Best 10 상품</h3>
      <div className={styles.detailwrap}>
        <div className={styles.imgWrap}>
          <img src={result.image} alt={result.title} />
        </div>
        <div className={styles.text}>
          <h4 className={styles.h4}>{result.title}</h4>
          <p className={styles.diescription}>{result.discription}</p>
          <p className={styles.price}>{result.price}원</p>
          <p className={styles.card}>{result.card}</p>
          <p className={styles.peoples}>
            <input type="number" defaultValue={1} className={styles.input1} />명
          </p>
        </div>
      </div>
    </div>
  );
}

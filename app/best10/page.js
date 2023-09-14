import Image from "next/image";
import styles from "./page.module.css";

import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("shop");
  let result = await db.collection("top").find().toArray();
  return (
    <div>
      <h4 className="title">BEST 10</h4>
      <div className={styles.realwrap}>
        {result.map((result, i) => {
          return (
            <div className={styles.cardwrap}>
              <Link href={"/best10/" + result._id}>
                <img src={result.image} className={styles.cardimg}></img>
                <div className={styles.cardtxt}>
                  <h4 className={styles.cardtitle}>{result.title}</h4>
                  <p className={styles.carddis}>{result.discription}</p>
                  <p className={styles.cardprice}>{result.price}원</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
}

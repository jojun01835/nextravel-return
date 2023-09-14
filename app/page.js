import Image from "next/image";
import styles from "./page.module.css";
import MovieSwper from "@/components/MovieSwper";
import MovieSwper1 from "@/components/MovieSwper1";
import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("shop");
  let result = await db.collection("new").find().toArray();
  return (
    <div>
      <div className="video-wrap">
        <video muted autoPlay loop width={"100%"} height={"100%"}>
          <source src="/video/main.mp4" type="video/mp4" width={"100%"} />
        </video>
      </div>
      <h2 className="title">추천 여행지 </h2>
      <div className={styles.banner}>
        <MovieSwper />
      </div>
      <div className="new-arrival">
        <h2 className="mt-10">NEW Travel</h2>
        <p>언젠가 업데이트</p>

        <div className="new-wrap">
          {result.map((result) => {
            return (
              <Link href={"/detail/" + result._id}>
                <div key={result.id} className="new-card">
                  <img src={result.image} alt={result.title}></img>
                  <div className="card-box">
                    <h3 className="title2">{result.title}</h3>
                    <h3 className="price">{result.price}원</h3>
                    <h3 className="discription">{result.description}</h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

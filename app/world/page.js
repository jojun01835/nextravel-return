import Image from "next/image";

import { connectDB } from "@/util/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("shop");
  let result = await db.collection("new").find().toArray();
  console.log(result);
  return (
    <div>
      <h4>Wolrd</h4>
      <div className="new-arrival">
        <div className="new-wrap"></div>
      </div>
      {result.map((result, i) => {
        return (
          <div>
            <img src={result.image}></img>
            <h4>{result.title}</h4>
            <p>{result.price}</p>
          </div>
        );
      })}
    </div>
  );
}

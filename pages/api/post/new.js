import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (session) {
    console.log(session.user.email);
  }
  if (req.method == "POST") {
    const client = await connectDB;
    const db = client.db("shop");
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, "0")}-${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")}`;

    let result = await db.collection("post").insertOne({
      title: req.body.title,
      content: req.body.content,
      createdAt: formattedDate,
    });
    return res.redirect(302, "/notice");
  }
}

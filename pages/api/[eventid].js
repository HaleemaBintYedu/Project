import db from "../../lib/dbConnect";
import Post from "../../models/post";

export async function handler(req, res) {
  if (req.method == "GET") {
    const { eventId } = req.params;
    await db.connect();
    const event = await Post.findById(eventId);
    db.disconnect();

    if (!event) {
      res.status(404).json({ message: "Post not found" });
      return;
    }
    res.status(200).json({ event });
  }
}

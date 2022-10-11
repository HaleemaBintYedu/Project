import Event from "../../../models/event";
import db from "../../../lib/dbConnect";




export default async function handler(req, res) {

    if (req.method === "GET") {
        await db.connect();

        const event = await Event.find({})

        await db.disconnect();

        res.status(200).json({event});
        return
    } else if(req.method === "POST") {
        await db.connect();

        const { title, body } =req.body;

        console.log({title, body})

        const event = await Event.create({
            title,
            body,

        });
        await db.disconnect();

        res.status(201).json({ event })
    } else {
        res.status(405).json({error: "only POST and GET are allow"})
    }
}
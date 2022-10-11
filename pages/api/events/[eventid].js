import db from "../../../lib/dbConnect";
import Event from "../../../models/event"


export async function handler(req, res) {
    if (req.method == "GET") {
        const { eventId } = req.params;
        await db.connect()
        const event = await Event.findById(eventId);
        db.disconnect();

        if (!event) {
            res.status(404).json({message: "Event not found"});
            return;
        }
        res.status(200).json({ event })
    }
}
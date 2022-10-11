import axios from "axios";

export const getEvents = async (id) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events`);
  const events = await res.data.events;

  if (id) {
    const post = events.find((event) => event._id == id);
    return post;
  }
  return events;
};

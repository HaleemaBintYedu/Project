import React from "react";
import { getPosts } from "../../utils/getPosts";

export async function getStaticPaths() {
  const res = await getPosts();

  const paths = res.map((event) => ({
    params: { eventId: String(event._id) },
  }));
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const event = await getPosts(context.params.eventId);

  return {
    props: {
      event,
    },
  };
}

const EventDetails = (event) => {
  return (
    <div>
      <h1>EventDetails</h1>
      <hr />
      {event.title}
    </div>
  );
};

export default EventDetails;

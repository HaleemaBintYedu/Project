import React from "react";
import { getEvents } from "../../utils/getEvents";

// export async function getStaticPaths() {
//     const res = await getEvents();

//     const paths = res.map((event) => ({params: {eventId: String(event._id)}}));
//     return {
//         paths,
//         fallback: true
//     };

// };

export async function getServerSideProps(context) {
  const event = await getEvents(context.params.eventId);

  return {
    props: {
      event,
    },
  };
}

const EventDetails = ({ event }) => {
  return (
    <div>
      <h1>EventDetails</h1>
      <hr />
      {event.title}
    </div>
  );
};

export default EventDetails;

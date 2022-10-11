import React from 'react'
import { getEvents} from "../../utils/getEvents"
import Link from "link/next"



export async function getStaticProps() {
    const posts = await getEvents();

    return {
        props: {
            posts
        },
    };
}
  const Events = ({events}) => {
  return (
    <div>
        {events.map((event) => (
            <p>
                <Link href={`/events/${event._id}`}><p>{event.title}</p></Link>
            </p>
        ))}
        <h1>Events</h1>
    </div>
  )
}

export default Events;
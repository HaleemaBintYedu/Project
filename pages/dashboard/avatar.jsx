import React from "react";
import ICalendarLink from "react-icalendar-link";

class Ical extends React.Component {
  const;
  render() {
    const event = {
      title: "My Title",
      description: "My Description",
      startTime: "2018-10-07T10:30:00+10:00",
      endTime: "2018-10-07T12:00:00+10:00",
      location: "",
      attendees: [""],
    };
    return (
      <>
        <ICalendarLink event={event}>
          <button className="bg-blue-500 gap-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            Generate ics file
          </button>
        </ICalendarLink>
      </>
    );
  }
}
export default Ical;

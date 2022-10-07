import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";
import axios from "axios";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];

const Cal_management = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const [data, setData] = useState({
    title: "",
    body: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, data);

      router.push("/posts");
    } catch (error) {
      setError(error.message);
    }
  };

  function handleAddEvent() {
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);
      /*
          console.log(d1 <= d2);
          console.log(d2 <= d3);
          console.log(d1 <= d4);
          console.log(d4 <= d3);
            */

      if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
        alert("CLASH");
        break;
      }
    }
    setAllEvents([...allEvents, newEvent]);
  }
  return (
    <div>
      <div className="justify-center">
        <div className="flex items-center justify-center">
          <h1>Calendar</h1>
        </div>
        <div className="flex justify-center bg-slate-500">
          <div className="flex flex-col items-center m-2">
            <h2 className="text-2xl text-yellow-200">Add New Event</h2>
            <form onSubmit={handleSubmit}>
              {error && <p>{error}</p>}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 
                  text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                type="text"
                placeholder="Add Title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
              />
              <DatePicker
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                 leading-tight focus:outline-none focus:shadow-outline mb-2"
                placeholderText="Start Date"
                selected={newEvent.start}
                onChange={(start) => setNewEvent({ ...newEvent, start })}
              />
              <DatePicker
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                    leading-tight focus:outline-none focus:shadow-outline mb-2"
                placeholderText="End Date"
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
              />
              <div class="mb-3 xl:w-96">
                {/* <label for="exampleFormControlTextarea1" class="justify-center items-center form-label inline-block mb-2 text-gray-700"
      >Event description</label> */}
                <textarea
                  onChange={handleChange}
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Event description"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white 
                        font-bold py-2 px-4 rounded mt-2"
                onClick={handleAddEvent}
              >
                Add Event
              </button>
            </form>
          </div>
        </div>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px" }}
        />
      </div>
    </div>
  );
};

export default Cal_management;

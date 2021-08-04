import { useState } from "react";
export const calculateTime = (time_in, time_out) =>
  (time_out.getTime() - time_in.getTime()) / 60000;
export default function TimeClock() {
  const [timeEntry, setTimeEntry] = useState({
    clockIn: null,
    clockOut: null,
    startLunch: null,
    endLunch: null,
    startBreak: null,
    endBreak: null,
  });
  const handleSave = (e) => {
    let { clockIn, clockOut, startLunch, endLunch, startBreak, endBreak } =
      timeEntry;
    let data = [
      {
        time_out: "2021-07-11T09:30:00.000Z", //startBreak
        time_in: "2021-07-11T10:00:00.000Z", //endBreak
        reason: "break",
        get total_time() {
          return calculateTime(new Date(this.time_in), new Date(this.time_out));
        },
      },
      {
        time_out: "2021-07-11T15:30:00.000Z", //startBreak
        time_in: "2021-07-11T16:00:00.000Z", //endBreak
        reason: "break",
        get total_time() {
          return calculateTime(new Date(this.time_in), new Date(this.time_out));
        },
      },
      {
        time_out: "2021-07-11T17:00:00.000Z", //clockIn
        time_in: "2021-07-11T08:00:00.000Z", //clockOut
        reason: "attendance",
        get total_time() {
          return calculateTime(new Date(this.time_in), new Date(this.time_out));
        },
      },
      {
        time_out: "2021-07-11T11:00:00.000Z", //startLunch
        time_in: "2021-07-11T12:00:00.000Z", //endLunch
        reason: "lunch",
        get total_time() {
          return calculateTime(new Date(this.time_in), new Date(this.time_out));
        },
      },
    ];
    let totalHours = data.reduce((accum, time) => accum + time.total_time, 0);
    setTimeEntry({ totalHours: totalHours });
  };

  const handleClick = ({ target: { name } }) =>
    setTimeEntry({ ...timeEntry, [name]: new Date() });
  return (
    <div>
      <div>
        <button onClick={handleClick} name="clockIn">
          Clock In
        </button>
      </div>
      <div>
        <button onClick={handleClick} name="clockOut">
          Clock Out
        </button>
      </div>
      <div>
        <button onClick={handleClick} name="startLunch">
          Start Lunch
        </button>
      </div>
      <div>
        <button onClick={handleClick} name="endLunch">
          End Lunch
        </button>
      </div>
      <div>
        <button onClick={handleClick} name="startBreak">
          Start Break
        </button>
      </div>
      <div>
        <button onClick={handleClick} name="endBreak">
          End Break
        </button>
      </div>
      <div>
        <button id="saveButton" onClick={handleSave}>
          Save
        </button>
      </div>
      <button hidden id="totalHours">
        {timeEntry?.totalHours}
      </button>
    </div>
  );
}

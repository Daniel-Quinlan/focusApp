import moment from "moment";
import "./Calendar.css";

export default function Calendar() {
  const dayTimeWorked = {
    days: { date: "2025-02-22", time: "08:00:00" },
  };

  let calendar = [];

  for (let i = 0; i < 364; i++) {
    let dayGridDate = moment().subtract(i, "days").format("YYYY-MM-D");

    if (dayGridDate === dayTimeWorked.days.date) {
      calendar.unshift(<div className={"day day--active "} key={i} />);
    } else {
      calendar.unshift(<div className={"day"} key={i} />);
    }
  }
  return (
    <>
      <div className="days">{calendar}</div>
    </>
  );
}

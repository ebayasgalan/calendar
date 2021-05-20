import React, { useState } from "react";
import moment from "moment";
import Calendar from "./calendar";

export default function () {
  const [selectedDate, setSelectedDate] = useState(moment());
  return <Calendar value={selectedDate} onChange={setSelectedDate} />;
}
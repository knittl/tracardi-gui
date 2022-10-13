import React from "react";

const DaysPassed = ({ date }) => {
  return <div>{calcDaysPassed(date)}</div>;
};

function calcDaysPassed(date) {
  if (typeof date !== "string" || isNaN(new Date(date))) {
    console.error(`Invalid input, ${date} should be a date string.`);
    return "";
  }

  const past = new Date(date).getTime();
  const present = new Date(Date.now()).getTime();

  const seconds = Math.floor((present - past) / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;

  const daysString = `${days} ${days > 1 ? "days" : "day"}`;

  const hoursString =
    hours >= 1
      ? `${hours} ${hours > 1 ? "hours" : "hour"}`
      : `${minutes} ${minutes > 1 ? "minutes" : "minute"}`;

  return days >= 1 ? `${daysString} ${hoursString}` : `${hoursString}`;
}

export default DaysPassed;

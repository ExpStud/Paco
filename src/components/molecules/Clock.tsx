import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  // const [time, setTime] = useState<string>("");

  // useEffect(() => {
  //   const updateClock = () => {
  //     const now = new Date();
  //     const hours = now.getHours();
  //     const minutes = now.getMinutes();
  //     const ampm = hours >= 12 ? "PM" : "AM";
  //     const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
  //     const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  //     const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
  //     setTime(formattedTime);
  //   };

  //   updateClock(); // Initial call to set the time immediately
  //   const intervalId = setInterval(updateClock, 1000); // Update every second

  //   return () => clearInterval(intervalId); // Cleanup interval on component unmount
  // }, []);

  // return <div className="whitespace-nowrap text-black">{time}</div>;

  return <div className="whitespace-nowrap text-black">4:20 AM</div>;
};

export default Clock;

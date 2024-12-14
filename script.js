"use strict";

const endDate = new Date("17 Dec, 2024 09:00:00");
const startDate = new Date("13 Dec, 2024 12:00:00");

const x = setInterval(() => {
  const now = new Date().getTime();
  const distanceCoverd = now - startDate;
  const pendingTime = endDate - now;

  //Definning constant values
  const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
  const HOUR_IN_MILLISECONDS = 60 * 60 * 1000;
  const MINUTE_IN_MILLISECONDS = 60 * 1000;
  const SECOND_IN_MILLISECONDS = 1000;

  // Calculating Remaining Time
  const days = Math.floor(pendingTime / DAY_IN_MILLISECONDS);
  const hours = Math.floor(
    (pendingTime % DAY_IN_MILLISECONDS) / HOUR_IN_MILLISECONDS
  );
  const minutes = Math.floor(
    (pendingTime % HOUR_IN_MILLISECONDS) / MINUTE_IN_MILLISECONDS
  );
  const seconds = Math.floor(
    (pendingTime % MINUTE_IN_MILLISECONDS) / SECOND_IN_MILLISECONDS
  );

  //Setting Timmer Values
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Setting Progress Bar
  //   const totalDistance = endDate - startDate;
  //   const percentageDistance = (distanceCoverd / totalDistance) * 100;
  //   document.getElementById("progress").style.width = percentageDistance + "%";

  console.log(pendingTime);
  if (pendingTime < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Appointment Opened!!";
    document.getElementById("countdown").style.color = "#000";
    document.getElementById("countdown").style.fontWeight = "bold";
  }
}, 1000);

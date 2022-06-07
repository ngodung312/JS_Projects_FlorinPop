const daysEle = document.getElementById("days");
const hoursEle = document.getElementById("hours");
const minutesEle = document.getElementById("minutes");
const secondsEle = document.getElementById("seconds");

const newBeginnings = "2022-07-09 00:00:00";

function countdown() {
  const dueDate = new Date(newBeginnings);
  const currDate = new Date();

  seconds = parseInt((dueDate - currDate) / 1000);

  minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;

  hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  days = parseInt(hours / 24);
  hours -= days * 24;

  // console.log(days, hours, minutes, seconds);
  daysEle.innerHTML = formatTime(days);
  hoursEle.innerHTML = formatTime(hours);
  minutesEle.innerHTML = formatTime(minutes);
  secondsEle.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown();

setInterval(countdown, 1000);

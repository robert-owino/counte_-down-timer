const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempdate = tempDate.getDate();

let endDateGiveAway = new Date(tempYear, tempMonth, tempdate + 10, 11, 30, 0);
const futureDate = new Date(endDateGiveAway);
let year = futureDate.getFullYear();
let date = futureDate.getDate();
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
let month = months[futureDate.getMonth()];
let day = weekdays[futureDate.getDay()];

giveaway.textContent = `Giveaway ends on ${day}, ${date} ${month} 
${year} ${hours}:${minutes}am`;

function countDown() {
  const currentDate = new Date();
  const totalSeconds = (futureDate - currentDate) / 1000;
  const el_Days = Math.floor(totalSeconds / 3600 / 24);
  const el_Hours = Math.floor(totalSeconds / 24) % 24;
  const el_Minutes = Math.floor(totalSeconds / 60) % 60;
  const el_Seconds = Math.floor(totalSeconds) % 60;

  const values = [el_Days, el_Hours, el_Minutes, el_Seconds];
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  items.forEach(function (item, index) {
    item.innerHTML = formatTime(values[index]);
  });
  if (totalSeconds < 0) {
    clearInterval(counter);
    deadline.innerHTML = `<h4 class='expired'>The giveaway has ended</h4>`;
  }
}

let counter = setInterval(countDown, 1000);
countDown();

//another way to write the code

// let tempDate = new Date()
// let tempYear = tempDate.getFullYear()
// let tempMonth = tempDate.getMonth()
// let tempdate = tempDate.getDate()

// const futureDate = new Date(tempYear, tempMonth, tempdate + 10, 11, 30, 0);

// let year = futureDate.getFullYear();
// let date = futureDate.getDate();
// let hours = futureDate.getHours();
// let mins = futureDate.getMinutes();
// let month = months[futureDate.getMonth()];
// let day = weekdays[futureDate.getDay()];
// giveaway.innerHTML = `Giveaway ends on ${day}, ${date} ${month}
// ${year} ${hours}:${mins}am`;

// function getCountDown() {
//   let futureTime = futureDate.getTime();
//   let currentTime = new Date().getTime();
//   const t = futureTime - currentTime;

//   //get miliseconds
//   // 1s = 1000ms
//   // 1m = 60s
//   // 1hr = 60m
//   // 1d = 24hr

//   //value in milliseconds
//   const oneDay = 24 * 60 * 60 * 1000;
//   const oneHour = 60 * 60 * 1000;
//   const oneMinute = 60 * 1000;

//   let days = Math.floor(t / oneDay);
//   let hours = Math.floor((t % oneDay) / oneHour);
//   let minutes = Math.floor((t % oneHour) / oneMinute);
//   let seconds = Math.floor((t % oneMinute) / 1000);

//   const values = [days, hours, minutes, seconds];

//   function formatTime(time){
//     return time < 10 ? `0${time}` : time
//   }

//   items.forEach(function (item, index) {
//     item.innerHTML = formatTime(values[index]);
//   });

//   if(t < 0){
//     clearInterval(countDown)
//     deadline.innerHTML = `<h4 class='expired'>The giveaway has ended</h4>`
//   }

// }

// const countDown = setInterval(getCountDown, 1000);
// getCountDown();

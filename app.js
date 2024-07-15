//Time
// let date = new Date();
// let hr;
// let min = date.getMinutes();
// let sec = date.getSeconds();

// //Date
// let day = date.getDate();
// let month = date.getMonth();
// let year = date.getFullYear();
// // let dayName = date.getDay();

// let monthName = date.toLocaleString("default", { month: "long" });
// let dayName = date.toLocaleString("default", { weekday: "long" });
// let month_arr = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// let month = month_arr[date.getMonth()];

// nc -> nc means not calculated
// let nc_hr = date.getHours();
// // if hr is greater than 12 then it is PM else it is AM
// let ampm = nc_hr >= 12 ? "PM" : "AM";

// let realhr = hr > 12 ? date.getHours() - 12 : "0" + hr;
// if min is less than 10 then it will be 0 + min else it will be min
// let realmin = min < 10 ? "0" + min : min;
// let realsec = sec < 10 ? "0" + sec : sec;

// Hour;
// if (nc_hr > 12) {
//   let realHr = nc_hr - 12;
//   hr = "0" + realHr;
// } else if (nc_hr === 0) {
//   hr = 12;
// } else if (nc_hr < 12) {
//   hr = "0" + nc_hr;
// }

function updateDynamic() {
  let date = new Date();
  let hr;
  let nc_hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let monthName = date.toLocaleString("default", { month: "long" });
  let dayName = date.toLocaleString("default", { weekday: "long" });
  let ampm = nc_hr >= 12 ? "PM" : "AM";

  if (nc_hr > 12) {
    let realHr = nc_hr - 12;
    hr = "0" + realHr;
  } else if (nc_hr === 0) {
    hr = 12;
  } else if (nc_hr < 12) {
    hr = "0" + nc_hr;
  }
  let realmin = min < 10 ? "0" + min : min;
  let realsec = sec < 10 ? "0" + sec : sec;
  let realday = day < 10 ? "0" + day : day;
  let realmonth = month + 1;
  let timeDiv = document.querySelector(".hms");
  timeDiv.innerHTML = `    <p>${nc_hr}:${realmin}:${realsec} <span>${ampm}</span></p>`;

  document.querySelector(
    ".dmy"
  ).innerHTML = `<p>${realday},${monthName},${year}   ${dayName}</p>`;
}

setInterval(updateDynamic, 1000);
// Minutes,second
// if (date.getMinutes() < 10){
//     min = "0" + date.getMinutes();
// }else{
//     min = date.getMinutes();
// }
// if (date.getSeconds() < 10){
//     sec = "0" + date.getSeconds();
// }else{
//     sec = date.getSeconds();
// }
// let day = date.getDate();
// let realday = day < 10 ? "0" + day : day;
// let realmonth = month + 1;

// let timeDiv = document.querySelector(".hms");
// timeDiv.innerHTML = `    <p>${hr}:${min}:${sec} <span>${ampm}</span></p>`;

// document.querySelector(
//   ".dmy"
// ).innerHTML = `<p>${realday}/${monthName}/${year}  ${dayName}</p>`;

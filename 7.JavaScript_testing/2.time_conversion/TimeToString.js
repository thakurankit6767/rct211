function TimeCovertToString(miliseconds) {
  let seconds = Math.floor(miliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds %= 60;
  minutes %= 60;

  let sec = "";
  let min = "";
  let hour = "";

  seconds == 1 ? (sec = seconds + " second") : (sec = seconds + " seconds");

  minutes == 1 ? (min = minutes + " minute") : (min = minutes + " minutes");

  hours == 1 ? (hour = hours + " hour") : (hour = hours + " hours");

  let result = [];

  hour[0] > 0 && result.push(hour);

  min[0] > 0 && result.push(min);

  sec[0] > 0 && result.push(sec);

  return result.join(" ");
}

module.exports = TimeCovertToString;

const clockTitle = document.querySelector(".js-clock");

const SECOND = 1000;
const MINUTE = 1000 * 60;
const HOUR = 1000 * 60 * 60;
const DAY = 1000 * 60 * 60 * 24;

function getTime() {
  const xmasEve = new Date(`${new Date().getFullYear()}-12-24:00:00:00+0900`);
  const now = new Date();
  const timeGap = xmasEve - now;
  const days = Math.floor(timeGap / DAY);
  const hours = Math.floor((timeGap % DAY) / HOUR);
  const minutes = Math.floor((timeGap % HOUR) / MINUTE);
  const seconds = Math.floor((timeGap % MINUTE) / SECOND);
  clockTitle.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

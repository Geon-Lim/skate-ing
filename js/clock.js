const time = document.querySelector(".clock span");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  time.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);

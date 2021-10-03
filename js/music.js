const music = [
  {
    title: "사랑은 (Feat. 원슈타인)",
    singer: "마미손",
    url: "music/사랑은.mp3",
  },
  {
    title: "DONE (Feat. Jayci Yucca & Skinny Brown)",
    singer: "릴러말즈 & Panda Gomm",
    url: "music/DONE.mp3",
  },
  {
    title: "Endless Summer",
    singer: "CIKI",
    url: "music/Endless Summer.mp3",
  },
  {
    title: "If I Die (Feat. ASH ISLAND)",
    singer: "skinny brown",
    url: "music/If I Die.mp3",
  },
  {
    title: "Ohayo My Night",
    singer: "디핵(D-Hack) & PATEKO",
    url: "music/Ohayo My Night.mp3",
  },
  {
    title: "Rainy Day (Feat. ASH ISLAND & Skinny Brown)",
    singer: "PATEKO(파테코)",
    url: "music/Rainy Day.mp3",
  },
  {
    title: "RUN",
    singer: "릴러말즈(Leellamarz) & Panda Gomm",
    url: "music/RUN.mp3",
  },
];

const playBtn = document.querySelector(".music__btn__play");
const nextBtn = document.querySelector(".music__btn__next");
const prevBtn = document.querySelector(".music__btn__previous");
const randomBtn = document.querySelector(".music__btn__random");
const replayBtn = document.querySelector(".music__btn__replay");

const title = document.querySelector(".music__title");
const singer = document.querySelector(".music__singer");
const currentTime = document.querySelector(".music__current-time");
const totalTime = document.querySelector(".music__total-time");

let musicList = [];
let currentPlay = false;
let position = 0;

function setList() {
  for (let i = 0; i < music.length; i++) {
    const song = setSong(music[i].url);
    musicList.push(song);
  }
}

function setSong(url) {
  const song = new Audio(url);
  song.addEventListener("ended", onSongEnd);
  return song;
}

function setTime() {
  const song = musicList[position];

  const totalSeconds = Math.floor(song.duration);
  const totalMinute = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const totalSecond = String(totalSeconds % 60).padStart(2, "0");

  const currentSeconds = Math.floor(song.currentTime);
  const currentMinute = String(Math.floor(currentSeconds / 60)).padStart(
    2,
    "0"
  );
  const currentSecond = String(currentSeconds % 60).padStart(2, "0");

  if (totalSeconds !== NaN) {
    totalTime.innerText = `${totalMinute}:${totalSecond}`;
    currentTime.innerText = `${currentMinute}:${currentSecond}`;
  }
}

function play() {
  const song = musicList[position];
  setDescription(music[position]);
  if (currentPlay === false) {
    song.play();
    currentPlay = true;
  } else {
    song.pause();
    currentPlay = false;
  }
}

function next() {
  let song = musicList[position];
  if (currentPlay === true) {
    song.pause();
  }
  position++;
  checkMaxPostion();
  song = musicList[position];
  song.load();
  song.play();
  currentPlay = true;
  setDescription(music[position]);
}

function prev() {
  let song = musicList[position];
  if (currentPlay === true) {
    song.pause();
  }
  position--;
  checkMaxPostion();
  song = musicList[position];
  song.load();
  song.play();
  currentPlay = true;
  setDescription(music[position]);
}

function random() {
  if (currentPlay === true) {
    play();
    currentPlay = true;
  }
  const randomNumber = Math.floor(Math.random() * musicList.length);
  position = randomNumber;
  setDescription(music[position]);
  replay();
}

function replay() {
  const song = musicList[position];
  song.load();
  if (currentPlay === true) {
    song.play();
  }
}

function onSongEnd() {
  position++;
  checkMaxPostion();
  currentPlay = false;
  setDescription(music[position]);
  play();
}

function checkMaxPostion() {
  if (position >= music.length) {
    position = 0;
  } else if (position < 0) {
    position = music.length - 1;
  }
}

function setDescription(song) {
  title.innerText = song.title;
  singer.innerText = song.singer;
}

setList();
setDescription(music[position]);
playBtn.addEventListener("click", play);
nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
randomBtn.addEventListener("click", random);
replayBtn.addEventListener("click", replay);

setInterval(setTime, 1000);

/* cog turn */
function cogTurn() {
  const cog = document.querySelectorAll(".music__play__cog .fa-cog");
  if (currentPlay === true) {
    cog[0].classList.add("cog-turn");
    cog[1].classList.add("cog-turn");
  } else if (currentPlay === false) {
    cog[0].classList.remove("cog-turn");
    cog[1].classList.remove("cog-turn");
  }
}

playBtn.addEventListener("click", cogTurn);
nextBtn.addEventListener("click", cogTurn);
prevBtn.addEventListener("click", cogTurn);

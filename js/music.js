function cogTurn() {
  const cog = document.querySelectorAll(".music__play__cog .fa-cog");
  cog[0].classList.toggle("cog-turn");
  cog[1].classList.toggle("cog-turn");
}

const musicPlayBtn = document.querySelector(".music__btn__play");

musicPlayBtn.addEventListener("click", cogTurn);

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
const prevBtn = document.querySelector(".music__btn__play");
const title = document.querySelector(".music__title");
const singer = document.querySelector(".music__singer");

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

function play() {
  const song = musicList[position];
  if (currentPlay === false) {
    song.play();
    currentPlay = true;
  } else {
    song.pause();
    currentPlay = false;
  }
}

function pause() {
  const song = musicList[position];
  song.pause();
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
  }
}

function setDescription(song) {
  title.innerText = song.title;
  singer.innerText = song.singer;
}

setList();
setDescription(music[position]);
playBtn.addEventListener("click", play);

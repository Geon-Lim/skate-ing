const images = [
  {
    name: "bg1",
    attributeLink: "https://www.freepik.com/vectors/banner",
    attributeText: "Banner vector created by upklyak - www.freepik.com",
  },
  {
    name: "bg2",
    attributeLink: "https://www.freepik.com/vectors/background",
    attributeText:
      "Background vector created by vectorpocket - www.freepik.com",
  },
  {
    name: "bg3",
    attributeLink: "https://www.freepik.com/vectors/banner",
    attributeText: "Banner vector created by upklyak - www.freepik.com",
  },
];

const attribute = document.querySelector(".attribute a");

const randomNumber = Math.floor(Math.random() * images.length);
const todaysImage = images[randomNumber].name;
attribute.href = images[randomNumber].attributeLink;
attribute.innerText = images[randomNumber].attributeText;

document.body.style.background = `url('../img/${todaysImage}.jpg') center/cover no-repeat`;

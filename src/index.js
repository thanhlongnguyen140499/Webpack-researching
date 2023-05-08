import generateJoke from "./generateJoke";
import "./styles/main.scss";
import qrCode from "./assets/householder.png";

const qrCodeImg = document.getElementById("qrCodeImg");
qrCodeImg.src = qrCode;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke()

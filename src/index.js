import generateJoke from "./generateJoke";
import "./styles/main.scss";
import qrCode from "./assets/householder.png";

const qrCodeImg = document.getElementById("qrCodeImg");
qrCodeImg.src = qrCode;

console.log(generateJoke);

import "./../scss/style.scss";
import { randomDogImage } from "./randomDogImage";

document.getElementById("randomBtn")?.addEventListener("click", () => {
    randomDogImage();
})

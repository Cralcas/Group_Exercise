import { IRandom } from "./modules/IRandom";
import { get } from "./serviceBase";


const randomImagesContainer = document.getElementById("randomImages");

export const randomDogImage = async (): Promise<string> => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const data = await get<IRandom>(url);
  console.log(data.message);
  createHtml(data.message);
  return data.message;
};
const createHtml = (dog: string) => {
  if (randomImagesContainer) {
    let img = document.createElement("img");
    img.src = dog;
    img.alt = "bild på hund";
    console.log(dog);
    console.log("hej");
    

    randomImagesContainer.appendChild(img);
  }
};

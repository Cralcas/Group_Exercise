
import { IDog } from "../modules/IRandom";
/* import { ISearchDog } from "./modules/ISearchDog"; */
import { get } from "./serviceBase";

const randomImagesContainer = document.getElementById("randomImage");
const container = document.createElement("div");
container.className = "container";

export const randomDogImage = async (): Promise<string> => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const data = await get<IDog>(url);
  createHtml(data.message);
  findBreedName(data.message);
  return data.message;
};

export const searchDog = async (): Promise<string> => {
    let userInput = (document.getElementById("userInput") as HTMLInputElement)
      .value;

    /* if(userInput.includes(" ")){
        let input = userInput.split(" ");
        userInput = input[0];
        console.log(input);
    } */

    const url = `https://dog.ceo/api/breed/${userInput}/images/random`;
    const data = await get<IDog>(url);
    createHtml(data.message);
    findBreedName(data.message);
    return data.message;
  };

const findBreedName = (url:string) => {
    let part = url.slice(30);
    console.log(part);
    let dogName = part.split("/")[0];
    console.log(dogName);
    dogName = dogName.charAt(0).toUpperCase() + dogName.slice(1);
    console.log(dogName);
    
    const name = document.createElement("h2");
  
    if(dogName.includes("-")){
        dogName = dogName.split("-").join(" "); 
        console.log(dogName);
              
    }
    name.className = "dogName"
    name.innerHTML = dogName;
    container.appendChild(name);
}


const createHtml = (dog: string) => {
  container.innerHTML = "";
  if (randomImagesContainer) {
    let img = document.createElement("img");
    img.src = dog;
    img.alt = "bild på hund";
    img.className = "dog";
    container.appendChild(img);
    randomImagesContainer.appendChild(container);
  }
};
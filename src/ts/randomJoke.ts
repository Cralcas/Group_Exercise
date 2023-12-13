import { IJoke } from "./modules/IJoke";
import { get } from "./serviceBase";

export const randomJoke = async ():Promise <IJoke> => {
    const url =  "https://official-joke-api.appspot.com/random_joke";
    const result = await get<IJoke>(url);

    createHtml(result);

    return result;
};

const section = document.getElementById("joke");
const jokeContainer = document.createElement("div");

jokeContainer.className = "jokeContainer";

const createHtml = (joke:IJoke) => {
   jokeContainer.innerHTML = "";

    const setup = document.createElement("p");
    const punchline = document.createElement("p");
    setup.className = "jokeContainer--setup";
    punchline.className = "jokeContainer--punchline";

    
    setup.innerHTML = joke.setup;
    punchline.innerHTML = joke.punchline;
      
    section?.appendChild(jokeContainer);
    jokeContainer.appendChild(setup);
    jokeContainer.appendChild(punchline);    
};
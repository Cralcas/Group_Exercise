import "./../scss/style.scss";
import {randomDogImage} from "./randomDogImage";
import {ICocktail} from "./models/ICocktail";
import {searchCocktail} from "./services/cocktailService";
import { randomJoke } from "./randomJoke";


document.getElementById("randomBtn")?.addEventListener("click", () => {
  randomDogImage();
});

document
  .getElementById("searchForm")
  ?.addEventListener("submit", async (e: SubmitEvent) => {
    e.preventDefault();

    const searchText = (
      document.getElementById("searchCocktail") as HTMLInputElement
    ).value;

    const cocktails = await searchCocktail(searchText);

    createCocktailHtml(cocktails);
    console.log(cocktails);
  });

const createCocktailHtml = (cocktails: ICocktail[]) => {
  const drinksContainer = document.getElementById("drinks") as HTMLDivElement;
  drinksContainer.innerHTML = "";

  for (let i = 0; i < cocktails.length; i++) {
    const cocktailContainer = document.createElement("div");
    const drinkTitle = document.createElement("h3");
    const drinkImage = document.createElement("img");

    cocktailContainer.id = "drinkBox";
    drinkTitle.innerHTML = cocktails[i].strDrink;
    drinkImage.id = "drinkimage";
    drinkImage.src = cocktails[i].strDrinkThumb;

    cocktailContainer.appendChild(drinkTitle);
    cocktailContainer.appendChild(drinkImage);
    drinksContainer.appendChild(cocktailContainer);
  }
};

const humBtn = document.getElementById("hum-btn")
humBtn?.addEventListener("click", () => {
    if(humBtn) {
        const menu = document.getElementById("menu")
        const menuList = document.createElement("div")
        menuList.className = "test"
        menu?.appendChild(menuList)
    }
})

document.getElementById("joke--btn")?.addEventListener("click",() => {
  randomJoke();
});


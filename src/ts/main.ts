import "./../scss/style.scss";
import { randomDogImage, searchDog } from "./services/randomDogImage";
import { ICocktail } from "./models/ICocktail";
import { searchCocktail } from "./services/cocktailService";
import { randomJoke } from "./randomJoke";

import { createHtmlLinks } from "./services/createHtmlLinks";

document.getElementById("randomBtn")?.addEventListener("click", () => {
  randomDogImage();
});

document.getElementById("searchBtn")?.addEventListener("click", (e) => {
  e.preventDefault();
  searchDog();
});
document
  .getElementById("searchForm")
  ?.addEventListener("submit", async (e: SubmitEvent) => {
    e.preventDefault();

    const searchText = (
      document.getElementById("searchCocktail") as HTMLInputElement
    ).value;

    if (searchText) {
      const cocktails = await searchCocktail(searchText);
      createCocktailHtml(cocktails);
      console.log(cocktails);
    } else {
      alert("Sök efter en cocktail");
    }
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

// Hamburgermeny
let isMenuCreated: boolean = false;
let menuList: HTMLElement; // skappar variabler här för att jag kommer använda de i olika kodeblock
const menu = document.getElementById("menu");
const humBtn = document.getElementById("hum-btn");
const humLine1 = document.getElementById("humLine1");
const humLine2 = document.getElementById("humLine2");
const humLine3 = document.getElementById("humLine3");
humBtn?.addEventListener("click", () => {
  if (humBtn && !isMenuCreated) {
    // gör en toggle med if
    menuList = document.createElement("div");
    menuList.id = "menuList";
    menuList.className = "menuList";
    menu?.appendChild(menuList);
    isMenuCreated = true;

    humLine1?.classList.add("cross1");
    humLine2?.classList.add("cross2");
    humLine3?.classList.add("cross3");
    humBtn.classList.add("removeGap");
    createHtmlLinks();
  } else {
    menuList?.remove();
    isMenuCreated = false;
    humLine1?.classList.remove("cross1");
    humLine2?.classList.remove("cross2");
    humLine3?.classList.remove("cross3");
    humBtn.classList.remove("removeGap");
  }
});
// funktion som gör att när man scrollar så görsvinner meny
const scroll = () => {
  if (menu) {
    if (window.scrollY > 0) {
      menu.classList.add("scroll");
    } else {
      menu.classList.remove("scroll");
    }
  }
};
// lägger till en eventListner för skroll händelsen
window.addEventListener("scroll", scroll);

document.getElementById("joke--btn")?.addEventListener("click", () => {
  randomJoke();
});

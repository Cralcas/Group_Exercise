export const createHtmlLinks = () => {
  setTimeout(() => {
    const menuList = document.getElementById("menuList");
    const linkToRandomImage = document.createElement("a");
    const linkToDrinks = document.createElement("a");
    const linkToHero = document.createElement("a");
    const linkToCocktails = document.createElement("a");

    linkToRandomImage.setAttribute("href", "#randomImage");
    linkToRandomImage.innerText = " Hundar";
    linkToRandomImage.className = "menuList__link";
    linkToRandomImage.classList.add("bi-balloon-heart");

    linkToDrinks.setAttribute("href", "#joke--title");
    linkToDrinks.innerText = " Joks";
    linkToDrinks.className = "menuList__link";
    linkToDrinks.classList.add("bi-journal");

    linkToHero.setAttribute("href", "#hero");
    linkToHero.innerText = " Start sidan";
    linkToHero.className = "menuList__link";
    linkToHero.classList.add("bi-house");

    linkToCocktails.setAttribute("href", "#cocktails");
    linkToCocktails.innerText = " Cocktails";
    linkToCocktails.className = "menuList__link";
    linkToCocktails.classList.add("bi-cup-straw");

    menuList?.appendChild(linkToHero);
    menuList?.appendChild(linkToRandomImage);
    menuList?.appendChild(linkToCocktails);
    menuList?.appendChild(linkToDrinks);
  }, 1000);
};

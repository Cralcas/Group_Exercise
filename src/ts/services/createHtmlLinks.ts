export const createHtmlLinks = () => {
  setTimeout(() => {
    const menuList = document.getElementById("menuList");
    const linkToRandomImage = document.createElement("a");
    const linkToDrinks = document.createElement("a");
    const linkToHero = document.createElement("a");

    linkToRandomImage.setAttribute("href", "#randomImage");
    linkToRandomImage.innerText = " Hundar";
    linkToRandomImage.className = "menuList__link";
    linkToRandomImage.classList.add("bi-balloon-heart");

    linkToDrinks.setAttribute("href", "#drinks");
    linkToDrinks.innerText = " Drinks";
    linkToDrinks.className = "menuList__link";
    linkToDrinks.classList.add("bi-cup-straw");

    linkToHero.setAttribute("href", "#hero");
    linkToHero.innerText = " Start sidan";
    linkToHero.className = "menuList__link";
    linkToHero.classList.add("bi-house");

    menuList?.appendChild(linkToHero);
    menuList?.appendChild(linkToRandomImage);
    menuList?.appendChild(linkToDrinks);
  }, 1000);
};

import "./../scss/style.scss";

const humBtn = document.getElementById("hum-btn")
humBtn?.addEventListener("click", () => {
    if(humBtn) {
        const menu = document.getElementById("menu")
        const menuList = document.createElement("div")
        menuList.className = "test"
        menu?.appendChild(menuList)
    }
})
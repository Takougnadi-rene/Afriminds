const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        menuButton.querySelector(".visually-hidden").textContent = isOpen ? "Open menu" : "Close menu";
        navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.querySelector(".visually-hidden").textContent = "Open menu";
            navigation.classList.remove("is-open");
        });
    });
}

const year = document.querySelector("#current-year");
if (year) {
    year.textContent = new Date().getFullYear();
}

function switchTheme(event) {
    const root = document.documentElement;
    const icons = document.querySelectorAll("#header .icon, #main-content .icon");

    switch (root.className) {
        case "light-theme": {
            root.className = "dark-theme";
            event.target.setAttribute("src", "./assets/icons/dark-theme-icon.svg");
            for (const icon of icons) {
                const source = icon.getAttribute("src");
                icon.setAttribute("src", source.replace("black", "white"));
            }
            break;
        }
        case "dark-theme": {
            root.className = "light-theme";
            event.target.setAttribute("src", "./assets/icons/light-theme-icon.svg");
            for (const icon of icons) {
                const source = icon.getAttribute("src");
                icon.setAttribute("src", source.replace("white", "black"));
            }
            break;
        }
    }
}

let themeSwitcher = document.querySelector("#theme-switcher");
themeSwitcher.addEventListener("click", (event) => switchTheme(event));

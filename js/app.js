(() => {
    "use strict";
    const iconOpenMenu = document.getElementById("icon-menu");
    if (iconOpenMenu) iconOpenMenu.addEventListener("click", (e => {
        document.documentElement.classList.toggle("menu-open");
    }));
})();
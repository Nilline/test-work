(() => {
    "use strict";
    document.addEventListener("click", documentActions);
    function documentActions(e) {
        if (e.target.closest("#icon-menu")) document.documentElement.classList.toggle("menu-open"); else if (!e.target.closest("#aside")) document.documentElement.classList.remove("menu-open");
    }
})();
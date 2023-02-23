(() => {
    "use strict";
    document.addEventListener("click", documentActions);
    function documentActions(e) {
        if (e.target.closest("#icon-menu") || !e.target.closest("#aside")) document.documentElement.classList.toggle("menu-open");
    }
})();
document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.querySelector(".song-popup-overlay");
    const openButtons = document.querySelectorAll(".show-popup");
    const closeButton = document.querySelector(".popup-close");

    if (!popupOverlay || !closeButton) return;

    openButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            popupOverlay.classList.add("active");
            document.body.classList.add("popup-open");
        });
    });

    closeButton.addEventListener("click", function () {
        popupOverlay.classList.remove("active");
        document.body.classList.remove("popup-open");
    });

    popupOverlay.addEventListener("click", function (event) {
        if (event.target === popupOverlay) {
            popupOverlay.classList.remove("active");
            document.body.classList.remove("popup-open");
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && popupOverlay.classList.contains("active")) {
            popupOverlay.classList.remove("active");
            document.body.classList.remove("popup-open");
        }
    });
});




/**--------------------- side-ber-humberger.js_start-------------- */
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".humberger-cross");
    const sidebar = document.querySelector(".sideber");

    if (!menuBtn || !sidebar) return;

    menuBtn.addEventListener("click", function () {
        menuBtn.classList.toggle("active");
        sidebar.classList.toggle("active");
    });
});
/**--------------------- side-ber-humberger.js_end-------------- */
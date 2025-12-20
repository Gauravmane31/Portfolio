document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".hoverMenuImg");
    const hoverMenu = document.querySelector(".hoverMenu");

    menuButton.addEventListener("click", function() {
        hoverMenu.classList.toggle("active");
    });
});

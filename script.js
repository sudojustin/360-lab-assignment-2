document.addEventListener("DOMContentLoaded", function () {
    let currentLocation = window.location.href;
    let menuLinks = document.querySelectorAll(".nav-link");

    menuLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add("active");
        }
    });
});

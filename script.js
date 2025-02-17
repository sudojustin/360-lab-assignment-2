document.addEventListener("DOMContentLoaded", function () {
    let currentLocation = window.location.pathname;
    let menuLinks = document.querySelectorAll(".nav-link");

    // First, remove active class from all links
    menuLinks.forEach(link => {
        link.classList.remove("active");
    });

    // Add active class to the home link if we're on the root path
    let homeLink = document.querySelector(".nav-link[href='/']");
    if (homeLink && (currentLocation === '/' || currentLocation === '')) {
        homeLink.classList.add("active");
    }

    // Then, add the active class to the link that matches the current location
    menuLinks.forEach(link => {
        let linkPath = new URL(link.href).pathname;
        if (linkPath === currentLocation) {
            link.classList.add("active");
        }
    });
});

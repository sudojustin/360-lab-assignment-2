document.addEventListener("DOMContentLoaded", function () {
    let currentLocation = window.location.pathname;  // Get the current path
    let menuLinks = document.querySelectorAll(".nav-link");

    // First, remove active class from all links
    menuLinks.forEach(link => {
        link.classList.remove("active");
    });

    // Check if we're on the homepage or any other link
    menuLinks.forEach(link => {
        let linkPath = link.pathname; // Get the link's pathname

        if (currentLocation === linkPath) {
            link.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let currentLocation = window.location.href;
    let menuLinks = document.querySelectorAll(".nav-link");

    // First, remove active class from all links
    menuLinks.forEach(link => {
        link.classList.remove("active");
    });

    // Add active class to the home link immediately
    let homeLink = document.querySelector(".nav-link[href='/']");  // Adjust this selector if needed
    if (homeLink) {
        homeLink.classList.add("active");
    }

    // Then, add the active class to the link that matches the current location
    menuLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add("active");
        }
    });
});

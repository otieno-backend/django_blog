// Simple JavaScript for Blog Website

document.addEventListener("DOMContentLoaded", function () {

    console.log("Blog page loaded");

    // Change heading when clicked
    const heading = document.querySelector(".content > h1");

    if (heading) {
        heading.addEventListener("click", function () {
            heading.textContent = "Welcome to My Blog!";
        });
    }

    // Add a click message to Read More links
    const links = document.querySelectorAll("article a");

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Thanks for reading!");
        });
    });

    // Change footer text
    const footer = document.querySelector("footer");

    if (footer) {
        footer.textContent = "© 2026 My Blog. All Rights Reserved.";
    }

});

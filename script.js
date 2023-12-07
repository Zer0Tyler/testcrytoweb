document.getElementById("menuIcon").onclick = function () {
    var nav = document.querySelector("nav");
    nav.style.display = (nav.style.display === "block") ? "none" : "block";
}
// Add this script to your existing script.js file or embed it in your HTML file

document.addEventListener("DOMContentLoaded", function () {
    const nightModeToggle = document.getElementById("nightModeToggle");
    const body = document.body;

    // Check if the user has a preference for night mode stored in localStorage
    const nightModePreference = localStorage.getItem("nightMode");
    if (nightModePreference === "enabled") {
        enableNightMode();
    }

    nightModeToggle.addEventListener("click", function () {
        toggleNightMode();
    });

    function toggleNightMode() {
        if (body.classList.contains("night-mode")) {
            disableNightMode();
        } else {
            enableNightMode();
        }
    }

    function enableNightMode() {
        body.classList.add("night-mode");
        // Save the user's preference in localStorage
        localStorage.setItem("nightMode", "enabled");
    }

    function disableNightMode() {
        body.classList.remove("night-mode");
        // Remove the user's preference from localStorage
        localStorage.removeItem("nightMode");
    }
});
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}
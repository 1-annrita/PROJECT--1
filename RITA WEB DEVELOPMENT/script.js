// JavaScript to show/hide the image container when the button is clicked
document.getElementById("background-button").addEventListener("click", function () {
    // Get the image container element
    const imageContainer = document.getElementById("imageContainer");

    // Check if the image container is currently hidden
    if (imageContainer.style.display === "none" || imageContainer.style.display === "") {
        // If hidden or not set, show the image container
        imageContainer.style.display = "block";
    } else {
        // If visible, hide the image container
        imageContainer.style.display = "none";
    }
});
document.addEventListener("DOMContentLoaded", () => {
    // Animating the title
    const titleElement = document.querySelector(".animate-title");
    let colors = ["#ffcc00", "#ff6600", "#6b00f6", "#ff0000"];
    let colorIndex = 0;

    setInterval(() => {
        titleElement.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1000); // Change color every second

    // Video interaction
    const video = document.querySelector("video");
    video.addEventListener("mouseenter", () => {
        console.log("Hovering over the video");
    });

    // Feature list hover effect
    const featureItems = document.querySelectorAll("#car-features ul li");
    featureItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.2)";
        });

        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
        });
    });
});

// Function to open fullscreen modal
function expandModel(model) {
    document.getElementById("fullscreen-modal-" + model).classList.add("active");
}

// Function to close fullscreen modal
function closeFullscreen(model) {
    document.getElementById("fullscreen-modal-" + model).classList.remove("active");
}

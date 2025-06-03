document.addEventListener("DOMContentLoaded", () => {
    console.log("Lamborghini Gallardo Page Loaded");

    // Dynamic title color animation
    const title = document.querySelector("header h1");
    const colors = ["#ffa500", "#ff4500", "#ff6347"];
    let colorIndex = 0;

    setInterval(() => {
        title.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1000);

    // Add gallery hover effect with JS
    const galleryImages = document.querySelectorAll("#car-gallery img");
    galleryImages.forEach((img) => {
        img.addEventListener("mouseenter", () => {
            img.style.borderColor = "#ff4500";
        });

        img.addEventListener("mouseleave", () => {
            img.style.borderColor = "#ffa500";
        });
    });

    // Video interaction message
    const video = document.querySelector("video");
    video.addEventListener("play", () => {
        console.log("Enjoy the timeless performance of the Gallardo!");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const bookingMessage = document.getElementById("booking-message");
    const bookingVideo = document.getElementById("booking-video");
    const messageText = document.getElementById("message-text");

    const bookNowButtons = document.querySelectorAll(".book-now");

    bookNowButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Get the data attributes from the button
            const message = button.getAttribute("data-message");
            const videoSrc = button.getAttribute("data-video");

            // Validate that videoSrc and message exist
            if (!videoSrc) {
                console.error("Error: Video source is missing.");
                return;
            }
            if (!message) {
                console.error("Error: Message text is missing.");
                return;
            }

            // Update the video source and message text
            bookingVideo.src = videoSrc;
            messageText.textContent = message;

            // Show the booking message and video
            bookingMessage.classList.remove("hidden");
            bookingMessage.style.display = "block";

            // Play the video and handle potential promise rejection
            bookingVideo.play().catch((error) => {
                console.error("Error playing video:", error);
            });

            // Hide the booking message after 5 seconds
            setTimeout(() => {
                bookingMessage.style.display = "none";
                bookingMessage.classList.add("hidden");
                bookingVideo.pause();
                bookingVideo.currentTime = 0; // Reset the video to the start
                bookingVideo.src = ""; // Clear the source to stop resource usage
            }, 10000);
        });
    });
});

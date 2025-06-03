document.addEventListener("DOMContentLoaded", () => {
<<<<<<< HEAD
    const bookingModal = document.getElementById("booking-modal"); // Changed ID
    const bookingVideo = document.getElementById("booking-video");
    const messageText = document.getElementById("message-text");
    const closeModalButton = document.querySelector(".close-modal-button"); // Added close button
    let modalHideTimeout; // To store the timeout ID

    const bookNowButtons = document.querySelectorAll(".book-now");

    function hideModal() {
        if (bookingModal) {
            bookingModal.style.display = "none"; // Use display none as per new CSS
            bookingModal.classList.add("hidden"); // Ensure hidden class is added
        }
        if (bookingVideo) {
            bookingVideo.pause();
            bookingVideo.currentTime = 0;
            bookingVideo.src = ""; // Clear src to stop loading
        }
        if (modalHideTimeout) {
            clearTimeout(modalHideTimeout); // Clear timeout if manually closed
        }
    }

    if (closeModalButton) {
        closeModalButton.addEventListener("click", hideModal);
    }

    // Optional: Close modal if user clicks outside the modal content
    if (bookingModal) {
        bookingModal.addEventListener("click", (event) => {
            if (event.target === bookingModal) { // Check if the click is on the overlay itself
                hideModal();
            }
        });
    }


    bookNowButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const message = button.getAttribute("data-message");
            const videoSrc = button.getAttribute("data-video");

            if (!videoSrc || !message) {
                console.error("Error: Video source or message text is missing.");
                return;
            }
            
            if (!bookingModal || !bookingVideo || !messageText) {
                console.error("Error: Modal elements not found.");
                return;
            }

            bookingVideo.src = videoSrc;
            messageText.textContent = message;
            
            bookingModal.classList.remove("hidden");
            bookingModal.style.display = "flex"; // Use flex to center content as per new CSS

=======
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
>>>>>>> origin/main
            bookingVideo.play().catch((error) => {
                console.error("Error playing video:", error);
            });

<<<<<<< HEAD
            // Clear any existing timeout
            if (modalHideTimeout) {
                clearTimeout(modalHideTimeout);
            }

            modalHideTimeout = setTimeout(hideModal, 10000); // Hide after 10 seconds
=======
            // Hide the booking message after 5 seconds
            setTimeout(() => {
                bookingMessage.style.display = "none";
                bookingMessage.classList.add("hidden");
                bookingVideo.pause();
                bookingVideo.currentTime = 0; // Reset the video to the start
                bookingVideo.src = ""; // Clear the source to stop resource usage
            }, 10000);
>>>>>>> origin/main
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Document fully loaded. Initializing functions...");

    setupSmoothScrolling();
    loadHeader();
    setupLazyLoad();
    initializeSplashScreen();
    setupTaglineRotation();
    setupAutoScrollShowcase();
    handleColorChange();
});

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}

// Load the header dynamically
function loadHeader() {
    const headerPath = "../header.html";
    console.log("Attempting to load header from:", headerPath);

    fetch(headerPath)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load header. Status: ${response.status}`);
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
            console.log("Header loaded successfully.");
        })
        .catch(err => console.error("Error loading header:", err));
}

// Lazy load animations for elements
function setupLazyLoad() {
    const featureElements = document.querySelectorAll(".feature");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    featureElements.forEach(feature => observer.observe(feature));
}

// Splash screen initialization
function initializeSplashScreen() {
    const splashScreen = document.getElementById("splash-screen");
    const splashVideo = document.getElementById("splash-video");

    if (splashScreen && splashVideo) {
        // Attempt to play the video with sound
        splashVideo.play().then(() => {
            // Video started playing
            console.log("Video is playing with sound.");
        }).catch(error => {
            console.error("Error playing video:", error);
        });

        // Try to unmute after 1 second (in case of initial mute issues)
        setTimeout(() => {
            if (splashVideo.muted) {
                splashVideo.muted = false;  // Unmute video after a short delay
                console.log("Unmuting video.");
            }
        }, 1000);

        // Hide splash screen after 15 seconds
        setTimeout(() => {
            splashVideo.pause();
            splashScreen.classList.add("hidden");
            setTimeout(() => {
                splashScreen.style.display = "none";
                document.getElementById("home").scrollIntoView({ behavior: "smooth" });
            }, 500);
        }, 15000);
    }
}


// Tagline rotation with dynamic background images
function setupTaglineRotation() {
    const taglines = [
        { text: "Speed Redefined", image: "../lambo-home.jpg" },
        { text: "Luxury in Motion", image: "../explore/images/lambo-aventador.jpg" },
        { text: "Experience the Power", image: "../explore/images/lambo-veneno.jpg" }
    ];
    let index = 0;

    const rotate = () => {
        const taglineElement = document.getElementById("dynamic-tagline");
        const heroContent = document.getElementById("hero-content");
        taglineElement.textContent = taglines[index].text;
        document.getElementById("home").style.backgroundImage = `url('${taglines[index].image}')`;
        heroContent.style.opacity = 1;
        index = (index + 1) % taglines.length;
    };

    rotate();
    setInterval(rotate, 3000);
}

// Auto-scroll functionality for the car showcase
function setupAutoScrollShowcase() {
    const carShowcase = document.querySelector(".car-slider");
    let scrollAmount = 0;
    const scrollStep = 200;
    const scrollInterval = 10000;

    setInterval(() => {
        if (carShowcase.scrollWidth - carShowcase.clientWidth <= scrollAmount) {
            carShowcase.scrollTo({ left: 0, behavior: "smooth" });
            scrollAmount = 0;
        } else {
            carShowcase.scrollBy({ left: scrollStep, behavior: "smooth" });
            scrollAmount += scrollStep;
        }
    }, scrollInterval);
}

// Dynamic color change for car previews
function handleColorChange() {
    window.changeColor = color => {
        const carPreview = document.getElementById("car-preview");
        carPreview.src = `images/${color}-car.jpg`;
    };
}

// Redirect to login or register pages
function handleLogin() {
    console.log("Redirecting to login page...");
    window.location.href = "/user/login/login.html";
}

function handleRegister() {
    console.log("Redirecting to register page...");
    window.location.href = "/user/reg/register.html";
}

// Navigate to the Explore page
function exploreNow() {
    window.location.href = "/explore/explore.html";
}

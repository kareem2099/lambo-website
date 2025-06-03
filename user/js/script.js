document.addEventListener("DOMContentLoaded", () => {
    console.log("Document fully loaded. Initializing functions...");

    setupSmoothScrolling();
    loadHeader();
    setupLazyLoad();
    initializeSplashScreen();
    setupTaglineRotation();
    setupAutoScrollShowcase();
    handleColorChange();
<<<<<<< HEAD
    setupParallaxHero(); // Added parallax setup
=======
>>>>>>> origin/main
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
<<<<<<< HEAD
    const headerPath = "../../header.html"; // Corrected path to root header.html
=======
    const headerPath = "../header.html";
>>>>>>> origin/main
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

<<<<<<< HEAD
// General Intersection Observer for fade-in animations on scroll
function setupLazyLoad() {
    const elementsToFadeIn = document.querySelectorAll('section, .feature, .contact-card'); // Added .contact-card

    if (elementsToFadeIn.length === 0) {
        return;
    }

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'fade-in-section' first to set initial opacity: 0
                // then add 'visible' to trigger the animation.
                // This order is important if 'fade-in-section' isn't already on the element.
                // However, for simplicity, we can assume elements that should fade in
                // will have 'fade-in-section' class added in HTML or via JS at setup.
                // For now, let's ensure they have it before adding 'visible'.
                if (!entry.target.classList.contains('fade-in-section')) {
                    entry.target.classList.add('fade-in-section');
                }
                // Add a tiny delay to ensure the opacity:0 from .fade-in-section is applied before animation starts
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 50);
                
                observerInstance.unobserve(entry.target); // Animate only once
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    elementsToFadeIn.forEach(el => {
        // Add .fade-in-section to all target elements initially if not present
        // This ensures they are hidden before they become visible
        if (!el.classList.contains('fade-in-section')) {
            el.classList.add('fade-in-section');
        }
        observer.observe(el);
    });
=======
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
>>>>>>> origin/main
}

// Splash screen initialization
function initializeSplashScreen() {
    const splashScreen = document.getElementById("splash-screen");
    const splashVideo = document.getElementById("splash-video");

    if (splashScreen && splashVideo) {
<<<<<<< HEAD
        // Video should be autoplaying due to attributes in index.html (autoplay muted loop playsinline)
        console.log("Splash screen video found.");

        // Hide splash screen and redirect after 5 seconds
        setTimeout(() => {
            splashVideo.pause(); // Pause video before redirect
            splashScreen.classList.add("hidden");
            setTimeout(() => {
                // splashScreen.style.display = "none"; // Not strictly necessary before redirect
                window.location.href = "home.html"; // Redirect to home.html
            }, 500); // Delay for fade-out animation
        }, 5000); // Splash screen duration: 5 seconds
    } else if (document.getElementById("home")) { // Only run scrollIntoView if #home exists (i.e., not on splash-only index.html)
        // This part is for pages other than index.html if they had a splash screen concept
        // For now, index.html is the only one with #splash-screen
=======
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
>>>>>>> origin/main
    }
}


// Tagline rotation with dynamic background images
function setupTaglineRotation() {
<<<<<<< HEAD
    const taglineElement = document.getElementById("dynamic-tagline");
    if (!taglineElement) { // Guard clause
        return;
    }
    const taglines = [
        { text: "Speed Redefined", image: "../../lambo-home.jpg" },
        { text: "Luxury in Motion", image: "../../explore/images/lambo-aventador.jpg" },
        { text: "Experience the Power", image: "../../explore/images/lambo-veneno.jpg" }
=======
    const taglines = [
        { text: "Speed Redefined", image: "../lambo-home.jpg" },
        { text: "Luxury in Motion", image: "../explore/images/lambo-aventador.jpg" },
        { text: "Experience the Power", image: "../explore/images/lambo-veneno.jpg" }
>>>>>>> origin/main
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
<<<<<<< HEAD
    if (!carShowcase) { // Guard clause
        return;
    }
=======
>>>>>>> origin/main
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
<<<<<<< HEAD

// Parallax effect for the Hero section background
function setupParallaxHero() {
    const homeSection = document.getElementById("home");
    if (!homeSection) { // Guard clause, only run if home section exists
        return;
    }

    window.addEventListener("scroll", () => {
        const offsetY = window.pageYOffset;
        // Ensure the effect only applies when the home section is somewhat in view
        // and to avoid issues if the background image is not set yet by setupTaglineRotation
        if (homeSection.style.backgroundImage) {
             homeSection.style.backgroundPositionY = offsetY * 0.7 + "px";
        }
    });
}
=======
>>>>>>> origin/main

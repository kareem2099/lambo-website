document.addEventListener("DOMContentLoaded", () => {
    console.log("Document fully loaded. Initializing functions...");

    setupSmoothScrolling();
    loadHeader();
    setupLazyLoad();
    initializeSplashScreen();
    setupTaglineRotation();
    setupAutoScrollShowcase();
    handleColorChange();
    setupParallaxHero(); 
});

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute("href"));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
}

// Load the header dynamically
function loadHeader() {
    const headerPath = "/header.html"; // Use absolute path from server root
    console.log("Attempting to load header from:", headerPath);

    fetch(headerPath)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load header. Status: ${response.status} ${response.statusText} for ${response.url}`);
            return response.text();
        })
        .then(data => {
            const firstChild = document.body.firstChild;
            document.body.insertBefore(document.createRange().createContextualFragment(data), firstChild);
            console.log("Header loaded successfully.");
            // After header is loaded, re-evaluate active links if needed or ensure CSS handles it
        })
        .catch(err => console.error("Error loading header:", err));
}

// General Intersection Observer for fade-in animations on scroll
function setupLazyLoad() {
    const elementsToFadeIn = document.querySelectorAll('section, .feature, .contact-card'); 

    if (elementsToFadeIn.length === 0) {
        return;
    }

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!entry.target.classList.contains('fade-in-section')) {
                    entry.target.classList.add('fade-in-section');
                }
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 50);
                
                observerInstance.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 }); 

    elementsToFadeIn.forEach(el => {
        if (!el.classList.contains('fade-in-section')) {
            el.classList.add('fade-in-section');
        }
        observer.observe(el);
    });
}

// Splash screen initialization
function initializeSplashScreen() {
    const splashScreen = document.getElementById("splash-screen");
    const splashVideo = document.getElementById("splash-video");

    if (splashScreen && splashVideo) {
        console.log("Splash screen video found.");
        // Ensure video is playing (attributes should handle this, but good to check)
        if (splashVideo.paused) {
            splashVideo.play().catch(e => console.error("Splash video play error:", e));
        }

        setTimeout(() => {
            if (splashVideo) splashVideo.pause(); 
            if (splashScreen) splashScreen.classList.add("hidden");
            
            setTimeout(() => {
                // Check if current page is index.html before redirecting
                if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html')) {
                    console.log("Redirecting to home.html from path:", window.location.pathname); 
                    window.location.href = "home.html"; 
                } else {
                    console.log("Not on index.html, no redirect. Pathname:", window.location.pathname); 
                }
            }, 500); 
        }, 15000); // Changed to 15 seconds
    } else if (document.getElementById("home")) { 
        // This logic was for scrolling into view if #home existed,
        // but splash screen is only on index.html now.
        // Can be removed or adapted if other pages get splash screens.
    }
}

// Tagline rotation with dynamic background images
function setupTaglineRotation() {
    const taglineElement = document.getElementById("dynamic-tagline");
    const homeSection = document.getElementById("home"); // Target the #home section for background image
    
    if (!taglineElement || !homeSection) { 
        return;
    }
    const taglines = [
        { text: "Speed Redefined", image: "../../lambo-home.jpg" }, // Corrected path
        { text: "Luxury in Motion", image: "../../explore/images/lambo-aventador.jpg" }, // Corrected path
        { text: "Experience the Power", image: "../../explore/images/lambo-veneno.jpg" } // Corrected path
    ];
    let index = 0;

    const rotate = () => {
        const currentTagline = taglines[index];
        taglineElement.textContent = currentTagline.text;
        // Ensure the #home element exists before trying to set its background
        if (homeSection) {
            homeSection.style.backgroundImage = `url('${currentTagline.image}')`;
        }
        // heroContent might not exist on all pages with dynamic tagline, add check
        const heroContent = document.getElementById("hero-content"); 
        if (heroContent) {
            heroContent.style.opacity = 1;
        }
        index = (index + 1) % taglines.length;
    };

    rotate(); 
    setInterval(rotate, 3000);
}

// Auto-scroll functionality for the car showcase
function setupAutoScrollShowcase() {
    const carShowcase = document.querySelector(".car-slider"); // This is the inner div that scrolls
    if (!carShowcase) { 
        return;
    }
    let scrollAmount = 0;
    const scrollStep = 1; // Smoother scroll
    const scrollInterval = 50; // Faster interval for smoother scroll

    function scroll() {
        if (carShowcase.scrollWidth - carShowcase.clientWidth <= carShowcase.scrollLeft) {
            carShowcase.scrollTo({ left: 0, behavior: 'auto' }); // Instant jump back
        } else {
            carShowcase.scrollBy({ left: scrollStep, behavior: 'auto' });
        }
    }
    setInterval(scroll, scrollInterval);
}

// Dynamic color change for car previews (configurator)
function handleColorChange() {
    // Ensure this function is only relevant/called on pages where 'car-preview' exists
    if (typeof window.changeColor === 'undefined' && document.getElementById('car-preview')) {
        window.changeColor = color => {
            const carPreview = document.getElementById("car-preview");
            if (carPreview) { // Check if element exists
                 // Path needs to be relative to where this function is used (configurator.html)
                carPreview.src = `images/${color}-car.jpg`;
            }
        };
    }
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

// Parallax effect for the Hero section background
function setupParallaxHero() {
    const homeSection = document.getElementById("home");
    if (!homeSection) { 
        return;
    }

    window.addEventListener("scroll", () => {
        const offsetY = window.pageYOffset;
        if (homeSection.style.backgroundImage) { // Check if background image is set
             homeSection.style.backgroundPositionY = offsetY * 0.7 + "px";
        }
    });
}

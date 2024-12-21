document.addEventListener("DOMContentLoaded", () => {
    setupSmoothScrolling();
    loadHeader();
    setupLazyLoad();
    initializeSplashScreen();
    setupTaglineRotation();
    setupAutoScrollShowcase();
    handleColorChange();
});

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function loadHeader() {
    fetch("../header.html")
        .then(response => {
            if (!response.ok) throw new Error("Failed to load header.");
            return response.text();
        })
        .then(data => document.body.insertAdjacentHTML("afterbegin", data))
        .catch(err => console.error(err));
}

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

function initializeSplashScreen() {
    const splashScreen = document.getElementById("splash-screen");
    const splashVideo = document.getElementById("splash-video");

    if (splashScreen && splashVideo) {
        setTimeout(() => {
            splashVideo.pause();
            splashScreen.classList.add("hidden");
            setTimeout(() => {
                splashScreen.style.display = "none";
                document.getElementById("home").scrollIntoView({ behavior: "smooth" });
            }, 500);
        }, 5000);
    }
}

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

function setupAutoScrollShowcase() {
    const carShowcase = document.querySelector('.car-showcase');
    setInterval(() => {
        carShowcase.scrollBy({ left: 300, behavior: "smooth" });
    }, 3000);
}

function handleColorChange() {
    window.changeColor = (color) => {
        const carPreview = document.getElementById("car-preview");
        carPreview.src = `images/${color}-car.jpg`;
    };
}

// Auto-scroll for Car Showcase
const carShowcase = document.querySelector('.car-slider');

let scrollAmount = 0; // Track scroll position
const scrollStep = 200; // Amount to scroll each time
const scrollInterval = 10000; // Time interval for scrolling

setInterval(() => {
    if (carShowcase.scrollWidth - carShowcase.clientWidth <= scrollAmount) {
        // If reached the end, reset scroll
        carShowcase.scrollTo({ left: 0, behavior: 'smooth' });
        scrollAmount = 0; // Reset the scroll tracker
    } else {
        // Scroll by step and update scroll tracker
        carShowcase.scrollBy({ left: scrollStep, behavior: 'smooth' });
        scrollAmount += scrollStep;
    }
}, scrollInterval);

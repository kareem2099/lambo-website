document.addEventListener("DOMContentLoaded", () => {
    const stages = {
        model: document.getElementById("model-stage"),
        color: document.getElementById("color-stage"),
        wheels: document.getElementById("wheels-stage"),
        interior: document.getElementById("interior-stage"),
        summary: document.getElementById("summary-stage"),
    };

    const colorOptionsContainer = document.getElementById("color-options");
    const carColors = {
        Aventador: {
            red: "images/aventador-red.jpg",
            blue: "images/aventador-blue.jpg",
            black: "images/aventador-black.jpg",
        },
        Huracán: {
            yellow: "images/huracan-yellow.jpg",
            green: "images/huracan-green.jpg",
            black: "images/huracan-black.jpg",
        },
        Urus: {
            white: "images/urus-white.jpg",
            silver: "images/urus-silver.jpg",
            black: "images/urus-black.jpg",
        },
        Gallardo: {
            white: "images/Gallardo-wite.jpg",
            silver: "images/Gallardo-silver.jpg",
            black: "images/Gallardo-black.jpg",
        },
        Sián: {
            white: "images/Sián-white.jpg",
            silver: "images/Sián-silver.jpg",
            black: "images/Sián-black.jpg",
        },
        veneno: {
            white: "images/veneno-white.jpg",
            silver: "images/veneno-silver.jpg",
            black: "images/veneno-black.jpg",
        },
    };

    let customization = {
        model: "",
        color: "",
        wheels: "",
        interior: "",
    };

    function switchStage(currentStage, nextStage) {
        stages[currentStage].classList.remove("active");
        stages[nextStage].classList.add("active");
    }

    window.selectModel = (model) => {
        customization.model = model;
    };

    window.proceedToColor = () => {
        // Dynamically populate color options with images based on the selected model
        if(!customization.model) {
            alert("Please select a model before proceeding!");
            return;
        }
        const colors = carColors[customization.model];
        colorOptionsContainer.innerHTML = ""; // Clear existing options
        Object.entries(colors).forEach(([color, imgSrc]) => {
            const colorCard = document.createElement("div");
            colorCard.classList.add("color-card");
            colorCard.innerHTML = `
                <img src="${imgSrc}" alt="${color} ${customization.model}" class="color-image">
                <button onclick="selectColor('${color}')">${color.charAt(0).toUpperCase() + color.slice(1)}</button>
            `;
            colorOptionsContainer.appendChild(colorCard);
        });
        switchStage("model", "color");
    };

    window.selectColor = (color) => {
        customization.color = color.charAt(0).toUpperCase() + color.slice(1);
    };

    window.selectWheels = (wheels) => {
        customization.wheels = wheels.charAt(0).toUpperCase() + wheels.slice(1);
    };

    window.selectInterior = (interior) => {
        customization.interior = interior.charAt(0).toUpperCase() + interior.slice(1);
    };

    window.proceedToWheels = () => switchStage("color", "wheels");
    window.proceedToInterior = () => switchStage("wheels", "interior");

    window.finalizeCustomization = () => {
        const summaryText = document.getElementById("summary-text");
        summaryText.textContent = `Model: ${customization.model} | Color: ${customization.color} | Wheels: ${customization.wheels} | Interior: ${customization.interior}`;
        const finalCarPreview = document.getElementById("final-car-preview");
        const selectedCarImage = carColors[customization.model][customization.color.toLowerCase()];
        finalCarPreview.src = selectedCarImage;
        switchStage("interior", "summary");
    };

    window.goBackToModel = () => switchStage("color", "model");
    window.goBackToColor = () => switchStage("wheels", "color");
    window.goBackToWheels = () => switchStage("interior", "wheels");

    window.startOver = () => {
        customization = { model: "", color: "", wheels: "", interior: "" };
        const finalCarPreview = document.getElementById("final-car-preview");
        finalCarPreview.src = "images/default-car.jpg";
        const summaryText = document.getElementById("summary-text");
        summaryText.textContent = "Model: | Color: | Wheels: | Interior:";
        switchStage("summary", "model");
    };
});

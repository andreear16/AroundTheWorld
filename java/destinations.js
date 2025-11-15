// Recomandare destinație aleatorie (am folosit Math)

document.addEventListener("DOMContentLoaded", () => {
    const destinations = [
        "Salalah, Oman",
        "Marrakech, Morocco",
        "Côte d'Azur, France & Monaco",
        "Tokyo, Japan",
        "New York, USA",
        "Cape Town, South Africa",
        "Sydney, Australia",
    ];

    
    const recommendButton = document.querySelector(".recommend-button");
    const recommendationContainer = document.getElementById("recommendation-container");

    if (recommendButton && recommendationContainer) {
        recommendButton.addEventListener("click", () => {
            const randomDestination = destinations[Math.floor(Math.random() * destinations.length)];
            recommendationContainer.textContent = `We recommend you visit: ${randomDestination}`;
            recommendationContainer.classList.add("visible");
        });
    } else {
        console.error("Button or recommendation container not found!");
    }
});

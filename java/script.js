
// Canvas setup
const canvas = document.getElementById("worldCanvas");
const ctx = canvas.getContext("2d");

// Coordonate pt Oman, France, Morocco 
const points = [
    { x: 500, y: 168, label: "Oman" },    // Oman
    { x: 385, y: 115, label: "France" },  // France
    { x: 360, y: 140, label: "Morocco" }  // Morocco
];

function drawPoints() {
    points.forEach(point => {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
        ctx.fill();
    });
}

//Fundal + puncte
const mapImage = new Image();
mapImage.src = '../poze/world-map.png';
mapImage.onload = () => {
    ctx.drawImage(mapImage, 0, 0, canvas.width, canvas.height);
    drawPoints();
};

//click event listener
canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    points.forEach(point => {
        const distance = Math.sqrt((x - point.x) ** 2 + (y - point.y) ** 2);
        if (distance < 10) {
            alert(`You clicked on ${point.label} :)`);
        }
    });
});

//Schimbarea stilului textului informativ
const changeStyleButton = document.getElementById("changeStyleButton");
const textElement = document.querySelector(".text1");

const styles = [
    { color: "red", fontSize: "18px", fontWeight: "normal", fontStyle: "italic" },
    { color: "blue", fontSize: "20px", fontWeight: "bold", fontStyle: "normal" },
    { color: "green", fontSize: "22px", fontWeight: "normal", fontStyle: "normal" }
];

let currentStyleIndex = 0;

changeStyleButton.addEventListener("click", () => {
    const currentStyle = styles[currentStyleIndex];

    textElement.style.color = currentStyle.color;
    textElement.style.fontSize = currentStyle.fontSize;
    textElement.style.fontWeight = currentStyle.fontWeight;
    textElement.style.fontStyle = currentStyle.fontStyle;

    currentStyleIndex = (currentStyleIndex + 1) % styles.length;
});

//Caruselul de imagini
// Selectează elementele necesare
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0; // Index-ul imaginii curente

// Actualizează poziția caruselului
function updateCarousel() {
    const offset = -currentIndex * 100; // Calculează offset-ul în procente
    carousel.style.transform = `translateX(${offset}%)`; // Mută caruselul pe orizontală
}

// Derulează înapoi
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Revine la ultima imagine dacă este prima
    updateCarousel();
});

// Derulează înainte
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length; // Revine la prima imagine dacă este ultima
    updateCarousel();
});

//Schimbarea citatelor de pe pagina main (am folosit setInterval)
document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "Take only memories, leave only footprints",
        "The journey is the destination",
        "Travel far enough, you meet yourself",
        "Life is short, and the world is wide",
        "Wander often, wonder always",
    ];

    let quoteIndex = 0;
    const quoteElement = document.getElementById("quote");

    // Funcția pentru actualizarea citatului
    function updateQuote() {
        quoteElement.textContent = quotes[quoteIndex];
        quoteIndex = (quoteIndex + 1) % quotes.length;
    }

    // Setează primul citat
    updateQuote();

    // Actualizează citatul la fiecare 8 secunde
    setInterval(updateQuote, 8000);
});



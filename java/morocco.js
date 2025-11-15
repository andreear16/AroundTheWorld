//Ajustarea fundalului cu getComputedStyle pt usurarea citirii

document.addEventListener("DOMContentLoaded", () => {
    const visitSection = document.querySelector(".text-container3");

    // Obține stilul calculat al secțiunii
    const computedStyle = getComputedStyle(visitSection);

    // Verifică dacă fundalul este #f2f2f2 (echivalent RGB: rgb(242, 242, 242))
    if (computedStyle.backgroundColor === "rgb(242, 242, 242)") {
        visitSection.style.backgroundColor = "rgba(240, 128, 128, 0.3)"; // Schimbă fundalul
        visitSection.style.transition = "background-color 0.5s ease"; // Adaugă tranziție
    }

    console.log("Stil calculat:", computedStyle.backgroundColor);
});



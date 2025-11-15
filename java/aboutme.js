//Manevrarea DOM-ului
//Intrebarea numelui
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    if (!container) {
        console.error("Container element not found. Check your HTML structure.");
        return;
    }

    // Cere utilizatorului numele
    const userName = prompt("What's your name?");
    const welcomeMessage = document.createElement("h3");
    welcomeMessage.style.color = "#0d564a";
    welcomeMessage.style.textAlign = "center";

    if (userName) {
        // Dacă utilizatorul introduce un nume, afișează mesajul
        welcomeMessage.textContent = `Welcome, ${userName}!`;
    } else {
        // Dacă utilizatorul nu introduce nimic
        welcomeMessage.textContent = `Welcome to my blog!`;
    }

    // Adaugă mesajul în container
    container.prepend(welcomeMessage);
});

//Mesaj care dispare automat (cu setTimeout)
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const inspirationalMessage = document.createElement("div");
        inspirationalMessage.textContent = "To Travel is to Live❤️";
        inspirationalMessage.style.position = "fixed";
        inspirationalMessage.style.bottom = "20px";
        inspirationalMessage.style.right = "20px";
        inspirationalMessage.style.backgroundColor = "#0d564a";
        inspirationalMessage.style.color = "#fff";
        inspirationalMessage.style.padding = "10px 20px";
        inspirationalMessage.style.borderRadius = "5px";
        inspirationalMessage.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        inspirationalMessage.style.fontSize = "16px";

        document.body.appendChild(inspirationalMessage);

        // Elimină mesajul după câteva secunde
        setTimeout(() => {
            inspirationalMessage.remove();
        }, 5000); // 5 secunde
    }, 3000); // Afișează mesajul după 3 secunde
});

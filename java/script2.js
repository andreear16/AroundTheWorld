//top destinations -NU MERGE!!
document.addEventListener("DOMContentLoaded", function () {
    const destinationList = document.getElementById("destination-list");

    // Creează o cerere AJAX cu XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Configurează cererea pentru fișierul JSON
    xhr.open("GET", "destinations.json", true);

    // Setează ce se întâmplă când răspunsul este primit
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Parsează răspunsul JSON
            const data = JSON.parse(xhr.responseText);

            // Generează HTML dinamic pentru fiecare destinație
            data.forEach(destination => {
                const destinationCard = document.createElement("div");
                destinationCard.classList.add("destination-card");

                destinationCard.innerHTML = `
                    <img src="${destination.image}" alt="${destination.name}">
                    <h3>${destination.name}</h3>
                    <p>${destination.description}</p>
                `;
                destinationList.appendChild(destinationCard);
            });
        } else {
            console.error("Eroare la încărcarea fișierului JSON:", xhr.status);
        }
    };

    // Gestionare erori
    xhr.onerror = function () {
        console.error("A apărut o eroare la cererea AJAX.");
    };

    // Trimite cererea
    xhr.send();
});

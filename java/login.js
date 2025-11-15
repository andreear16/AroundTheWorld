//Formular de login
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    // Gestionare submit formular
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validare 
        if (username === "admin" && password === "123") {
            // Salvează utilizatorul în localStorage
            localStorage.setItem("loggedInUser", JSON.stringify({ username }));
            alert("Login successful!");

            // Redirectionare catre pagina principală
            window.location.href = "main.html";
        } else {
            // Afișează mesaj de eroare
            errorMessage.textContent = "Invalid username or password!";
            errorMessage.style.display = "block";
        }
    });
});

//Pop-up cu stopPropagation
document.addEventListener("DOMContentLoaded", () => {
    const popupOverlay = document.getElementById("popupOverlay");

    // Închide popup-ul când se face click în afara lui
    popupOverlay.addEventListener("click", () => {
        popupOverlay.classList.add("hidden");
    });

    // Previne propagarea click-ului pe popup
    const popup = document.querySelector(".popup");
    popup.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});


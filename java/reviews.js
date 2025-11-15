// Selectează elementele necesare
const opinionForm = document.getElementById("opinionForm");
const reviewsContainer = document.getElementById("reviewsContainer");

// Încarcă recenziile din localStorage și le afișează
function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || []; // Obține recenziile sau un array gol
    reviews.forEach(review => {
        addReviewToDOM(review);
    });
}

// Salvează o recenzie în localStorage
function saveReviewToLocalStorage(review) {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(review); // Adaugă noua recenzie
    localStorage.setItem("reviews", JSON.stringify(reviews)); // Salvează în localStorage
}

// Adaugă o recenzie în DOM
function addReviewToDOM({ destination, review, rating }) {
    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");

    reviewItem.innerHTML = `
        <h3>${destination}</h3>
        <p><strong>Review:</strong> ${review}</p>
        <p><strong>Rating:</strong> ${rating}/5</p>
    `;

    reviewsContainer.appendChild(reviewItem); // Adaugă recenzia în container
}

// Gestionarea trimiterii formularului
opinionForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Previne reîncărcarea paginii

    // Obține valorile inputurilor
    const destination = document.getElementById("destination").value.trim();
    const review = document.getElementById("review").value.trim();
    const rating = document.getElementById("rating").value;

    // Selectează elementele pentru afișarea mesajelor de eroare
    const destinationError = document.querySelector("#destination + .error-message");
    const reviewError = document.querySelector("#review + .error-message");

    // Resetează erorile existente
    destinationError.style.display = "none";
    reviewError.style.display = "none";

    // Expresii regulate pentru validare
    const destinationRegex = /^[A-Za-z\s]+$/; // Doar litere și spații
    const reviewRegex = /^.{10,500}$/; // Minimum 10 caractere, maximum 500

    let valid = true;

    // Validare pentru câmpul destinație
    if (!destinationRegex.test(destination)) {
        destinationError.textContent = "Destination must contain only letters and spaces.";
        destinationError.style.display = "block";
        valid = false;
    }

    // Validare pentru câmpul recenzie
    if (!reviewRegex.test(review)) {
        reviewError.textContent = "Review must be between 10 and 500 characters.";
        reviewError.style.display = "block";
        valid = false;
    }

    // Dacă validarea trece, adaugă recenzia
    if (valid) {
        const newReview = { destination, review, rating };
        addReviewToDOM(newReview);
        saveReviewToLocalStorage(newReview);
        opinionForm.reset();
    }
});

// Încarcă recenziile salvate la încărcarea paginii
document.addEventListener("DOMContentLoaded", loadReviews);

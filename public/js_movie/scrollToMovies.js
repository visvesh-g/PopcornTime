// Assuming each button has an id corresponding to its genre
const romanceButton = document.getElementById("romance-btn");
const thrillerButton = document.getElementById("thriller-btn");
const comedyButton = document.getElementById("comedy-btn");
const familyButton = document.getElementById("family-btn");
const horrorButton = document.getElementById("horror-btn");

// Add click event listeners to each button
romanceButton.addEventListener("click", () => scrollToGenre("romantic"));
thrillerButton.addEventListener("click", () => scrollToGenre("thriller"));
comedyButton.addEventListener("click", () => scrollToGenre("comedy"));
familyButton.addEventListener("click", () => scrollToGenre("family"));
horrorButton.addEventListener("click", () => scrollToGenre("horror"));

// Scroll to the respective genre movies
function scrollToGenre(genre) {
    const genreElement = document.getElementById(`${genre}-movies`);
    if (genreElement) {
        genreElement.scrollIntoView({ behavior: "smooth" });
    }
}

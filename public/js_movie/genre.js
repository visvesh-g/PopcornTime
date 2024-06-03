const apiKey = "1cd180ff27e371d8accce68d211dd1bc";
const genresURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=`;
const imgURL = "https://image.tmdb.org/t/p/w1280";
const genresRoot = document.getElementById("genres-root");
const genreIDs = {
    romantic: 10749,
    thriller: 53,
    comedy: 35,
    family: 10751,
    horror: 27
};

async function fetchData(URL) {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
        return null;
    }
}

const fetchAndShowResults = async (URL, genre) => {
    const data = await fetchData(URL);
    if (data && data.results) {
        showResults(data.results, genre);
    } else {
        console.error("No data found for URL:", URL);
    }
};

const movieCard = (movie) => 
    `<div class="col">
        <div class="card">
            <a class="card-media" href="${movie.poster_path}" target="_blank">
                <img src="${movie.poster_path}" alt="${movie.original_title}" width="100%" />
            </a>
            <div class="card-content">
                <div class="card-cont-header">
                    <div class="cont-left">
                        <h3 style="font-weight: 600">${movie.original_title}</h3>
                        <span style="color: #12efec">${movie.release_date}</span>
                    </div>
                    <div class="cont-right">
                        <a href="${movie.poster_path}" target="_blank" class="btn">See image</a>
                    </div>
                </div>
                <div class="describe">
                    ${movie.overview}
                </div>
            </div>
        </div>
    </div>`;

const showResults = (items, genre) => {
    let content = `<h2 class='genre-title' id=${genre.charAt(0).toLowerCase() + genre.slice(1)}-movies>${genre.charAt(0).toUpperCase() + genre.slice(1)} Movies</h2>`;
    let emptyDiv = `<div></div>`
    if (items && items.length > 0) {
        items.forEach((item) => {
            let { poster_path, original_title, release_date, overview } = item;

            if (poster_path) {
                poster_path = imgURL + poster_path;
            } else {
                poster_path = "./img-01.jpeg";
            }

            if (original_title.length > 15) {
                original_title = original_title.slice(0, 15) + "...";
            }

            if (!overview) {
                overview = "No overview yet...";
            }

            if (!release_date) {
                release_date = "No release date";
            }

            const movieItem = {
                poster_path,
                original_title,
                release_date,
                overview,
            };

            content += movieCard(movieItem);
        });
    } else {
        content += "<p>Something went wrong!</p>";
    }

    genresRoot.innerHTML += content; // Inject content to genresRoot
};

function init() {
    for (const genre in genreIDs) {
        const URL = `${genresURL}${genreIDs[genre]}`;
        console.log("Fetching movies for genre:", genre, "with URL:", URL); // Debug log
        fetchAndShowResults(URL, genre);
    }
}

document.addEventListener("DOMContentLoaded", init);


const apiKey = "1cd180ff27e371d8accce68d211dd1bc";
const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=1`;
const imgURL = "https://image.tmdb.org/t/p/w1280";
const searchURL = `https://api.themoviedb.org/3/search/movie?&api_key=${apiKey}&query=`;
const form = document.getElementById("search-form");
const query = document.getElementById("query");
const root = document.getElementById("root");
let page = 1;
let inSearchPage = false;
let isLoading = false;

// Debounce function to limit the rate of function calls
const debounce = (func, wait = 100) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

// Fetching JSON data from URL
async function fetchData(URL) {
    try {
        const data = await fetch(URL).then((res) => res.json());
        return data;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

const fetchAndShowResults = async (URL) => {
    isLoading = true;
    const data = await fetchData(URL);
    if (data) {
        showResults(data.results);
    }
    isLoading = false;
};

const getSpecificPage = (page) => {
    const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=${page}`;
    fetchAndShowResults(URL);
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

const showResults = (items) => {
    let content = !inSearchPage ? root.innerHTML : "";
    if (items && items.length > 0) {
        items.map((item) => {
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

    root.innerHTML = content; // Inject content to root
};

const handleLoadMore = () => {
    if (!isLoading) {
        getSpecificPage(++page);
    }
};

const detectEndAndLoadMore = debounce((e) => {
    let el = document.documentElement;
    if (!inSearchPage && el.scrollTop + el.clientHeight >= el.scrollHeight - 5) {
        handleLoadMore();
    }
}, 200);

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    inSearchPage = true;
    const searchTerm = query.value;
    if (searchTerm) {
        fetchAndShowResults(searchURL + searchTerm);
        query.value = "";
    }
});

window.addEventListener("scroll", detectEndAndLoadMore);

function init() {
    inSearchPage = false;
    fetchAndShowResults(URL);
}

init();

//function called when toprated button clicked
function getTopRatedMovies() {
    window.location.href = "toprated.html";
}

//function called when genres button clicked
function showGenres() {
    window.location.href = "genres.html";
}




// Fonction pour récupérer les films depuis l'API
async function getFilms() {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=8c4b867188ee47a1d4e40854b27391ec');
    const data = await response.json();
    return data.results;
}

// Fonction pour récupérer les séries depuis l'API
async function getSeries() {
    const response = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=8c4b867188ee47a1d4e40854b27391ec');
    const data = await response.json();
    return data.results;
}

// Fonction pour afficher les détails de l'article sur une nouvelle page
function afficherDetailArticle(articleId) {
    window.location.href = `article.html?id=${articleId}`;
}

// Fonction pour afficher les films sur la page d'accueil avec la structure HTML spécifiée
async function afficherFilms() {
    const films = await getFilms();
    const filmsContainer = document.getElementById('films');
    filmsContainer.innerHTML = ''; // Vide le contenu précédent
    films.forEach(film => {
        const filmCard = document.createElement('div');
        filmCard.classList.add('card', 'bg-dark', 'text-white', 'm-2');
        filmCard.style.width = '28rem';
        filmCard.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${film.poster_path}" class="card-img" alt="${film.title}">
            <div class="card-body">
                <h5 class="card-title">${film.title}</h5>
                <p class="card-text">Résumé: ${film.overview}</p>
                <a href="#" class="btn btn-primary" onclick="afficherDetailArticle(${film.id})">En savoir plus</a>
                <p class="card-text p-1"></p>
            </div>
        `;
        filmsContainer.appendChild(filmCard);
    });
}

// Fonction pour afficher les séries sur la page d'accueil avec la structure HTML spécifiée
async function afficherSeries() {
    const series = await getSeries();
    const seriesContainer = document.getElementById('series');
    seriesContainer.innerHTML = ''; // Vide le contenu précédent
    series.forEach(serie => {
        const serieCard = document.createElement('section');
        serieCard.classList.add('card', 'bg-dark', 'text-white', 'm-2');
        serieCard.style.width = '28rem';
        serieCard.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${serie.poster_path}" class="card-img" alt="${serie.name}">
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <p class="card-text">Résumé: ${serie.overview}</p>
                <a href="#" class="btn btn-primary" onclick="afficherDetailArticle(${serie.id})">En savoir plus</a>
                <p class="card-text p-1"></p>
            </div>
        `;
        seriesContainer.appendChild(serieCard);
    });
}

// Appeler les fonctions pour afficher les films et les séries au chargement de la page
afficherFilms();
afficherSeries();





// système de tri pour la barre de recherche
let allFilms = [];
let allSeries = [];

async function loadFilms() {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY');
    const data = await response.json();
    allFilms = data.results;
    displayFilms(allFilms);
}

async function loadSeries() {
    const response = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=YOUR_API_KEY');
    const data = await response.json();
    allSeries = data.results;
    displaySeries(allSeries);
}

function displayFilms(films) {
    const filmsDiv = document.getElementById('films');
    filmsDiv.innerHTML = films.map(film => `
    <div class="card m-2" style="width: 18rem; height: 100%;">
        <img src="https://image.tmdb.org/t/p/w500/${film.poster_path}" class="card-img-top" alt="${film.title}">
    <div class="card-body d-flex flex-column justify-content-between">
        <div>
            <h5 class="card-title">${film.title}</h5>
            <p class="card-text">${film.overview}</p>
        </div>
        <button onclick="afficherDetailArticle(${film.id})" class="btn btn-primary mt-auto">En savoir plus</button>
    </div>
</div>
    `).join('');
}

function displaySeries(series) {
    const seriesDiv = document.getElementById('series');
    seriesDiv.innerHTML = series.map(serie => `
        <div class="card m-2" style="width: 18rem; height: 100%;">
            <img src="https://image.tmdb.org/t/p/w500/${serie.poster_path}" class="card-img-top" alt="${serie.name}">
            <div class="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 class="card-title">${serie.name}</h5>
                    <p class="card-text">${serie.overview}</p>
                </div>
                <button onclick="afficherDetailArticle(${serie.id})" class="btn btn-primary mt-auto">En savoir plus</button>
            </div>
        </div>
    `).join('');
}

document.getElementById('search-input').addEventListener('input', event => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredFilms = allFilms.filter(film => film.title.toLowerCase().includes(searchTerm));
    const filteredSeries = allSeries.filter(serie => serie.name.toLowerCase().includes(searchTerm));
    displayFilms(filteredFilms);
    displaySeries(filteredSeries);
});

document.addEventListener('DOMContentLoaded', function() {
    loadFilms();
    loadSeries();
});



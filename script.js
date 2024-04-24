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
    window.location.href = `article.php?id=${articleId}`;
}

// Fonction pour afficher les films sur la page d'accueil avec un bouton "En savoir plus"
async function afficherFilms() {
    const films = await getFilms();
    const filmsDiv = document.getElementById('films');
    filmsDiv.innerHTML = '<h2>Films</h2>';
    films.forEach(film => {
        const filmElement = document.createElement('div');
        filmElement.innerHTML = `
            <h3>${film.title}</h3>
            <img src="https://image.tmdb.org/t/p/w500/${film.poster_path}" alt="${film.title}">
            <p>Résumé: ${film.overview}</p>
            <button onclick="afficherDetailArticle(${film.id})">En savoir plus</button>
        `;
        filmsDiv.appendChild(filmElement);
    });
}

// Fonction pour afficher les séries sur la page d'accueil avec un bouton "En savoir plus"
async function afficherSeries() {
    const series = await getSeries();
    const seriesDiv = document.getElementById('series');
    seriesDiv.innerHTML = '<h2>Séries</h2>';
    series.forEach(serie => {
        const serieElement = document.createElement('div');
        serieElement.innerHTML = `
            <h3>${serie.name}</h3>
            <img src="https://image.tmdb.org/t/p/w500/${serie.poster_path}" alt="${serie.name}">
            <p>Résumé: ${serie.overview}</p>
            <button onclick="afficherDetailArticle(${serie.id})">En savoir plus</button>
        `;
        seriesDiv.appendChild(serieElement);
    });
}

// Appeler les fonctions pour afficher les films et les séries au chargement de la page
afficherFilms();
afficherSeries();

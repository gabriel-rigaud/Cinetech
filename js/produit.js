// Récupère les paramètres de l'URL pour obtenir l'ID de l'article sélectionné
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');
const articleType = urlParams.get('type');

// Fonction pour récupérer les détails de l'article depuis l'API
async function getArticleDetails(articleId, articleType) {
    const response = await fetch(`https://api.themoviedb.org/3/${articleType}/${articleId}?api_key=8c4b867188ee47a1d4e40854b27391ec&append_to_response=credits`);
    const data = await response.json();
    return data;
}

// Fonction pour afficher les détails de l'article sur la page
async function afficherArticle() {
    const articleDetails = await getArticleDetails(articleId, articleType);
    const articleDiv = document.getElementById('article');

    // Formatage des genres en une seule chaîne de caractères
    const genres = articleDetails.genres.map(genre => genre.name).join(', ');

    // Formatage des acteurs en une seule chaîne de caractères
    const acteurs = articleDetails.credits.cast.map(actor => actor.name).join(', ');

    articleDiv.innerHTML = `<div style="background: black; color: white">
        <h2>${articleDetails.title || articleDetails.name}</h2>
        <img style="width: 400px" src="https://image.tmdb.org/t/p/w500/${articleDetails.poster_path}" alt="${articleDetails.title || articleDetails.name}" class="card-img">
        <p><strong>Réalisateur:</strong> ${getDirectors(articleDetails.credits.crew)}</p>
        <p><strong>Types:</strong> ${genres}</p>
        <p><strong>Pays d'origine:</strong> ${articleDetails.production_countries.map(country => country.name).join(', ')}</p>
        <p><strong>Résumé:</strong> ${articleDetails.overview}</p>
        <p><strong>Acteurs:</strong> ${acteurs}</p>
        <p><strong>Date de sortie:</strong> ${articleDetails.release_date || articleDetails.first_air_date}</p></div>
        <!-- Ajoutez d'autres détails de l'article ici selon vos besoins -->
    `;

    // Appeler la fonction pour afficher les éléments similaires (films ou séries)
    if (articleType === 'movie') {
        await afficherFilmsSimilaires(articleId);
    } else if (articleType === 'tv') {
        await afficherSeriesSimilaires(articleId);
    }
}

// Fonction pour obtenir les réalisateurs du film
function getDirectors(crew) {
    const directors = crew.filter(member => member.job === 'Director');
    return directors.map(director => director.name).join(', ');
}

// Fonction pour récupérer les films similaires depuis l'API
async function getFilmsSimilaires(movieId) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=8c4b867188ee47a1d4e40854b27391ec`);
    const data = await response.json();
    return data.results;
}

// Fonction pour afficher les films similaires
async function afficherFilmsSimilaires(movieId) {
    const filmsSimilaires = await getFilmsSimilaires(movieId);
    const filmsSimilairesDiv = document.getElementById('films-similaires');
    filmsSimilairesDiv.innerHTML = '<h2 class="title-film">Films similaires</h2>';
    filmsSimilaires.forEach(film => {
        const filmElement = document.createElement('div');
        filmElement.classList.add('card', 'bg-dark', 'text-white', 'm-2');
        filmElement.innerHTML = `
            <h3 class="card-title">${film.title}</h3>
            <img style="width: 300px" src="https://image.tmdb.org/t/p/w500/${film.poster_path}" alt="${film.title}" class="card-img">
            <p class="card-text">Résumé: ${film.overview}</p>
            <p class="card-text">Date de sortie: ${film.release_date}</p>
        `;
        filmsSimilairesDiv.appendChild(filmElement);
    });
}

// Fonction pour récupérer les séries similaires depuis l'API
async function getSeriesSimilaires(serieId) {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${serieId}/similar?api_key=8c4b867188ee47a1d4e40854b27391ec`);
    const data = await response.json();
    return data.results;
}

// Fonction pour afficher les séries similaires
async function afficherSeriesSimilaires(serieId) {
    const seriesSimilaires = await getSeriesSimilaires(serieId);
    const seriesSimilairesDiv = document.getElementById('series-similaires');
    seriesSimilairesDiv.innerHTML = '<h2 class="title-film">Séries similaires</h2>';
    seriesSimilaires.forEach(serie => {
        const serieElement = document.createElement('div');
        serieElement.classList.add('card', 'bg-dark', 'text-white', 'm-2');
        serieElement.innerHTML = `
            <h3 class="card-title">${serie.name}</h3>
            <img style="width: 300px" src="https://image.tmdb.org/t/p/w500/${serie.poster_path}" alt="${serie.name}" class="card-img">
            <p class="card-text">Résumé: ${serie.overview}</p>
            <p class="card-text">Date de première diffusion: ${serie.first_air_date}</p>
        `;
        seriesSimilairesDiv.appendChild(serieElement);
    });
}

// Appeler la fonction pour afficher les détails de l'article
afficherArticle();
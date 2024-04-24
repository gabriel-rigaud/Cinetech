// Récupère les paramètres de l'URL pour obtenir l'ID de l'article sélectionné
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');

// Fonction pour récupérer les détails de l'article depuis l'API
async function getArticleDetails(articleId) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${articleId}?api_key=8c4b867188ee47a1d4e40854b27391ec&append_to_response=credits`);
    const data = await response.json();
    return data;
}

// Fonction pour afficher les détails de l'article sur la page
async function afficherArticle() {
    const articleDetails = await getArticleDetails(articleId);
    const articleDiv = document.getElementById('article');

    // Formatage des genres en une seule chaîne de caractères
    const genres = articleDetails.genres.map(genre => genre.name).join(', ');

    // Formatage des acteurs en une seule chaîne de caractères
    const acteurs = articleDetails.credits.cast.map(actor => actor.name).join(', ');

    articleDiv.innerHTML = `
        <h2>${articleDetails.title}</h2>
        <img src="https://image.tmdb.org/t/p/w500/${articleDetails.poster_path}" alt="${articleDetails.title}">
        <p><strong>Réalisateur:</strong> ${getDirectors(articleDetails.credits.crew)}</p>
        <p><strong>Types:</strong> ${genres}</p>
        <p><strong>Pays d'origine:</strong> ${articleDetails.production_countries.map(country => country.name).join(', ')}</p>
        <p><strong>Résumé:</strong> ${articleDetails.overview}</p>
        <p><strong>Acteurs:</strong> ${acteurs}</p>
        <p><strong>Date de sortie:</strong> ${articleDetails.release_date}</p>
        <!-- Ajoutez d'autres détails de l'article ici selon vos besoins -->
    `;
}

// Fonction pour obtenir les réalisateurs du film
function getDirectors(crew) {
    const directors = crew.filter(member => member.job === 'Director');
    return directors.map(director => director.name).join(', ');
}

// Appeler la fonction pour afficher les détails de l'article au chargement de la page
afficherArticle();

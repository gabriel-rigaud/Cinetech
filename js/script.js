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
function afficherDetailArticle(articleId, type) {
    // Construire l'URL de redirection en fonction du type (film ou série)
    const articleType = type === 'movie' ? 'movie' : 'tv';
    window.location.href = `article.php?type=${articleType}&id=${articleId}`;
}

// Fonction générique pour afficher les éléments (films ou séries) sur la page d'accueil avec la structure HTML spécifiée
async function afficherElements(elements, containerId, type) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Vide le contenu précédent
    elements.forEach(element => {
        const elementCard = document.createElement('div');
        elementCard.classList.add('card', 'bg-dark', 'text-white', 'm-2');
        elementCard.style.width = '28rem';
        elementCard.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" class="card-img" alt="${element.title || element.name}">
            <div class="card-body">
                <h5 class="card-title">${element.title || element.name}</h5>
                <p class="card-text">Résumé: ${element.overview}</p>
                <a href="#" class="btn btn-primary" onclick="afficherDetailArticle(${element.id}, '${type}')">En savoir plus</a>
                <p class="card-text p-1"></p>
            </div>
        `;
        container.appendChild(elementCard);
    });
}

// Fonction pour afficher les films et les séries au chargement de la page
async function afficherTout() {
    const films = await getFilms();
    const series = await getSeries();
    afficherElements(films, 'films', 'movie');
    afficherElements(series, 'series', 'tv');
}

// Appeler la fonction pour afficher les films et les séries au chargement de la page
afficherTout();

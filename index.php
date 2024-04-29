<?php session_start();

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/styles.css">
    <script src ="js/script.js" defer></script>
    <title>Ma Bibliothèque de Films et Séries</title>
</head>

<body>
  <?php include 'header.php';?>

<hr>
<main>
  <!-- Titre de la page -->
  <h1 class ="text-center">Bienvenue sur notre site chère visiteur !</h1>

    <h1 class="title">Film</h1>
    <section id="films" class="d-flex flex-wrap justify-content-center p-3 g-1">
        <!-- Cette section sera remplie avec les films par JavaScript -->
    </section>
    <h1 class="title">Series</h1>
    <section id="series" class="d-flex flex-wrap justify-content-center p-3 g-1">
        <!-- Cette section sera remplie avec les séries par JavaScript -->
    </section>

</main>

<footer class="text-center text-lg-start bg-dark text-muted text-white">
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="me-5 d-none d-lg-block">
      <span class ="text-white">Rejoignez-nous sur les réseaux sociaux :</span>
    </div>

    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f text-white"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter text-white"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google text-white"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram text-white"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin text-white"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github text-white"></i>
      </a>
    </div>
  </section>


  <section>
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

          <h6 class="text-uppercase fw-bold mb-4 text-white"><i class="fas fa-gem me-3 text-white"></i>Compagnie Cinetch</h6>
          <p class ="text-white">
            Cinetch, officiellement orthographié Cinetch, est un service fournissant des informations cinématographiques
            en ligne fondé par Ali-Farhad Masoomi en 1989, puis rejoint par deuxième cerveau.
          </p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4 text-white">Rubriques 1 :</h6>
          <p class ="text-white">
            <a href="https://www.allocine.fr/service/contact/" class="text-reset text-white">Contact</a>
          </p>
          <p class ="text-white">
            <a href="https://www.allocine.fr/service/apropos/" class="text-reset text-white">Qui sommes-nous</a>
          </p>
          <p class ="text-white">
            <a href="https://webedia-group.com/" class="text-reset text-white">Recrutement</a>
          </p>
          <p class ="text-white">
            <a href="https://specs.webedia.fr/" class="text-reset text-white">Publicité</a>
          </p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4 text-white">Rubriques 2 :</h6>
          <p class ="text-white">
            <a href="https://www.allocine.fr/service/cookies.html" class="text-reset text-white">Préférences Cookies</a>
          </p>
          <p class ="text-white">
            <a href="https://www.allocine.fr/service/note-presse.html" class="text-reset text-white">Revue de Presse</a>
          </p>
          <p class ="text-white">
            <a href="https://www.allocine.fr/service/charte.html" class="text-reset text-white">Données Personnelle</a>
          </p>
          <p class ="text-white">
            <a href="https://www.allocine.fr/service/conditions.html" class="text-reset text-white">CGU</a>
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4 text-white">Rubrique 3 :</h6>
          <p class ="text-white"><i class="fas fa-home me-3 text-white"></i> Marseille,13002,France</p>
          <p class ="text-white"><i class="fas fa-envelope me-3 text-white"></i> cinetch-marseille@gmail.com</p>
          <p class ="text-white"><i class="fas fa-phone me-3 text-white"></i> + 33 6 22 55 33 21</p>
          <p class ="text-white"><i class="fas fa-print me-3 text-white"></i> + 33 7 85 12 35 45</p>
        </div>
      </div>
    </div>
  </section>
  <div class="text-center d-flex justify-content-center p-4 g-1" style="background-color: rgba(0, 0, 0, 0.05);">
    <p class ="text-white">© 2024 Copyright:</p>
    <p class ="text-white"><a class="text-reset fw-bold text-white">Cinetech</a></p>

    <!-- Copyright -->
  </div>
</footer>

</body>
</html>

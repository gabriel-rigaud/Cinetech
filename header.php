<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
</script>

<?php
// Test si l'utilisateur est connecté
if (isset($_POST['deconnexion']) && $_POST['deconnexion'] == true) {
    // Destruction de la session en cas de déconnexion
    session_unset();
    session_destroy();
    header('Location: index.php');
}
else if(isset($_SESSION['user'])){
    $login = $_SESSION['user'];
    echo "<header class ='d-flex justify-content-center p-4 bg-dark'>
    <nav class='navbar navbar-expand-lg bg-body-tertiary'>
        <div class='container-fluid'>
            <a class='navbar-brand' href='index.php'>Cinetch</a>
            <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
    <span class='navbar-toggler-icon'></span>
            </button>
            <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li class='nav-item'>
                        <a class='nav-link active' aria-current='page' href='index.php'>Accueil</a>
                    </li>
                    <li class='nav-item'>
                        <a class='nav-link active' aria-current='page' href='profil.php'>Profil</a>
                    </li>
                    <li class='nav-item'>
                        <a class='nav-link' href='deconnexion.php'>Déconnexion</a>
                    </li>
                </ul>
                <form class='d-flex' role='search'>
                    <input class='form-control me-2' type='search' placeholder='Search' aria-label='Search'>
                    <button class='btn btn-danger' type='submit'>Rechercher</button>
                </form>
            </div>
        </div>
    </nav>
</header>";

    if ($login) {}
}
else{
    echo "<header class ='d-flex justify-content-center p-4 bg-dark'>
    <nav class='navbar navbar-expand-lg bg-body-tertiary'>
        <div class='container-fluid'>
            <a class='navbar-brand' href='index.php'>Cinetch</a>
            <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
    <span class='navbar-toggler-icon'></span>
            </button>
            <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li class='nav-item'>
                        <a class='nav-link active' aria-current='page' href='index.php'>Accueil</a>
                    </li>
                    <li class='nav-item'>
                        <a class='nav-link active' aria-current='page' href='connexion.php'>Connexion</a>
                    </li>
                    <li class='nav-item'>
                        <a class='nav-link' href='inscription.php'>Inscription</a>
                    </li>
                </ul>
                <form class='d-flex' role='search'>
                    <input class='form-control me-2' type='search' placeholder='Search' aria-label='Search'>
                    <button class='btn btn-danger' type='submit'>Rechercher</button>
                </form>
            </div>
        </div>
    </nav>
</header>";
}
?>
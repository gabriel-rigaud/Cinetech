<?php
session_start();

// Connexion à la base de données
$bdd = new PDO('mysql:host=localhost;dbname=cinetech;charset=utf8', 'root', '');

// Récupération des commentaires de l'article avec les noms d'utilisateur associés
$id_article = $_GET['id'] ?? null;
$resultat_commentaires = [];
if ($id_article) {
    $query = $bdd->prepare("SELECT c.*, u.login AS nom_utilisateur FROM commentaires c INNER JOIN users u ON c.id_utilisateur = u.id WHERE c.id_article = :id_article");
    $query->execute(array('id_article' => $id_article));
    $resultat_commentaires = $query->fetchAll();
}

// Traitement du formulaire de commentaire
if (isset($_POST["valider"]) && isset($_SESSION["user"]['id'])) {
    $commentaire = htmlspecialchars($_POST['commentaire']);
    $id_utilisateur = $_SESSION["user"]['id'];
    $query = $bdd->prepare("INSERT INTO commentaires (commentaire, id_article, id_utilisateur) VALUES (:commentaire, :id_article, :id_utilisateur)");
    $query->execute(array('commentaire' => $commentaire, 'id_article' => $id_article, 'id_utilisateur' => $id_utilisateur));
    // Redirection pour éviter la soumission multiple du formulaire
    header("Location: article.php?id=$id_article");
    exit();
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Détails de l'article</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
<?php include 'header.php';?>
<div class="container">
    <h1>Détails de l'article</h1>
    <div id="article"></div>

    <!-- Affichage des commentaires -->
    <?php if (!empty($resultat_commentaires)) :?>
        <div class="commentaires">
            <h3><?= count($resultat_commentaires) ?> Commentaire(s)</h3>
            <?php foreach ($resultat_commentaires as $commentaire) :?>
                <p class="bg-light m-0"><b><?= ucfirst($commentaire['nom_utilisateur']) ?></b>, le <?=strftime("%d %B %Y",strtotime($commentaire['date'])) ?></p>
                <p><?= $commentaire['commentaire'] ?></p>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>

    <!-- Formulaire de commentaire si l'utilisateur est connecté -->
    <?php if(isset($_SESSION["user"]['id'])) :?>
        <form action="article.php?id=<?= $id_article ?>" method="POST" class="form-commentaire">
            <div class="form-group">
                <label for="commentaire">Votre commentaire :</label>
                <textarea name="commentaire" id="commentaire" cols="30" rows="10" class="input-commentaire"></textarea>
            </div><br>
            <input type="submit" name="valider" class="bouton-bleu" value="Valider">
        </form>
    <?php endif; ?>

    <section id="films-similaires" class="d-flex flex-wrap justify-content-center p-3 g-1"></section>


    <section id="series-similaires" class="d-flex flex-wrap justify-content-center p-3 g-1"></section>
</div>

<script src="js/produit.js"></script>
</body>
<style>
    .card {
        width: 1400%;  /* Définir une hauteur fixe pour tous les blocs */
        height: 650px; /* Définir une hauteur fixe pour tous les blocs */
    }
</style>
</html>
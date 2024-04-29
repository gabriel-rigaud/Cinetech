<?php
// Informations de connexion à la base de données
$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'cinetech';

// Connexion à la base de données
$conn = mysqli_connect($host, $username, $password, $dbname);

// Vérifier la connexion
if (!$conn) {
    die("Connexion échouée : " . mysqli_connect_error());
}

session_start();

try {
    // Vérification de l'existence de la session
    if(!isset($_SESSION['user'])) {
        //Autrement on redirige vers connexion
        header('location: connexion.php');
        exit();
    }

    // Stockage de l'identifiant de l'utilisateur connecté dans $idverify
    $idverify = $_SESSION['user']['login'];

    // Récupération des données envoyées en POST
    if(isset($_POST['login']) && isset($_POST['password']) && isset($_POST['password2'])) {
        $new_login = $_POST['login'];
        $password = $_POST['password'];
        $password2 = $_POST['password2'];

        // Vérification que les champs ne sont pas vides
        if (empty($new_login) || empty($password) || empty($password2)) {
            die('Tous les champs sont obligatoires.');
        }

        // Vérification que le mot de passe est correct
        if ($password != $password2) {
            die('Les mots de passe ne correspondent pas.');
        }

        // Modification du login dans la base de données
        $query_update = "UPDATE users SET login = ? WHERE login = ?";
        $stmt_update = mysqli_prepare($conn, $query_update);
        mysqli_stmt_bind_param($stmt_update, "ss", $new_login, $idverify);
        mysqli_stmt_execute($stmt_update);

        // Mettre à jour le login dans la session
        $_SESSION['user']['login'] = $new_login;

        echo 'Votre login a été modifié avec succès !';
    }
} catch(Exception $e) {
    echo 'Erreur : ' . $e->getMessage();
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Profil</title>
    <link rel="icon" href="https://cdn.dribbble.com/users/230290/screenshots/15128882/media/4175d17c66f179fea9b969bbf946820f.jpg?compress=1&resize=400x300" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body id="profil">
<?php include 'header.php'; ?>
<center>
    <div class="autre" id="profil">
        <div class="titre">
            <h1>Profil</h1>
            <?php echo "<h3 style='color: black'>Bienvenue <span style='color: red;'>".$_SESSION['user']['login']."</span></h3><br>"; ?>
        </div>
        <form action="profil.php" method="post">
            <div>
                <label for="login">Votre Login :</label>
                <input type="text" id="login" name="login" value="<?php echo $_SESSION['user']['login']; ?>" required><br><br>
            </div>

            <div>
                <label for="mdp">Password&nbsp;: </label>
                <input type="password" id="mdp" name="password" placeholder="Entrer votre password" required><br><br>
            </div>

            <div>
                <label for="confmdp">Confirmé&nbsp;:</label>
                <input type="password" id="confmdp" name="password2" placeholder="Re rentrer password" required><br><br>
            </div>

            <div>
                <br>
                <button class="btn-blue" type="submit" name="submit">Valider</button>
                <button class="btn-blue"><a class="clique" style="text-decoration: none;color: black" href="deconnexion.php">Deconnexion</a></button>
            </div>
        </form>
    </div>
</center>
</body>
</html>

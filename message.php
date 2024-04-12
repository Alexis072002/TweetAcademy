<?php
$bdd = new PDO('mysql:host=localhost;dbname=twitter;charset=utf8;', 'root', '');
if(isset($_POST['message'])){
    if(!empty($_POST['message'])){
    $message = htmlspecialchars($_POST['message']);
    $ins = $bdd->prepare('INSERT INTO tweet (message) VALUES(?)');
    $ins->execute(array($message));;
    } else {
    $error = "Veuillez remplir les champs...";
}}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Messagerie Twitter</title>
    <meta charset="utf-8">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>
<body>
    <form method="POST" action="">
        <textarea name="textmessage" placeholder="Quoi de neuf ?"></textarea>
        <input type="submit" value="message">
    </form>
    <section id="Messages"></section>
<script>
    setInterval('load_message()', 500);
    function load_message(){
        $('#Messages').load('messenger.php');
    }
</script>
</body>
</html>
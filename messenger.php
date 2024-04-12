<?php
$bdd = new PDO('mysql:host=localhost;dbname=twitter;charset=utf8;', 'root', '');
$loadmsg = $bdd->query('SELECT * FROM tweet');
while($messenger = $loadmsg->fetch()){
    ?>
<div class="message">
    <?= $message = '' ?>
    <h4><?= $message['message']; ?></h4>
    <p><?= $message['message']; ?></p>
</div>
<?php
}
?>
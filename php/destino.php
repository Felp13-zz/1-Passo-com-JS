<!doctype html>
<html lang="pt-br">
	<head>
		<meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">   
		<title>Elementos de formulário HTML</title>  
		
	</head>
<body>

<?php

$nomeRecebido = $_GET["nomeUser"];
$email= $_GET["emailUser"];
$telefone= $_GET["telefoneUser"];


echo"
<fieldset>
<legend>Seu computador</legend>
Seu nome é $nomeRecebido, seu e-mail é $email<br>
,seu telefone é $telefone.
</fieldset>


	"
?>

</body>
</html>


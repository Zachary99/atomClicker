<?php
	include_once 'header.php';
?>

<!DOCTYPE html>

<html>
<head>
	<link rel="stylesheet" type="text/css" href="index.css">
	<meta charset="utf-8" />
	<title>AC Singup :: Welcome!</title>
</head>
<body>
	<section class="main-container">
		<div class="main-wrapper">
			<h2>Sign Up</h2>
			<form class="Signup-form" action="signup.inc.php" method="POST">
				<input type="text" name="first" placeholder="First Name">
				<input type="text" name="last" placeholder="Last Name">
				<input type="text" name="email" placeholder="E-mail">
				<input type="text" name="uid" placeholder="Username">
				<input type="Password" name="pwd" placeholder="Password">
				<button type="submit" name="submit">Sign Up</button>
			</form>
		</div>	
	</section>

<?php
	include_once 'footer.php';
?>

</body>
</html>
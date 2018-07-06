<?php

session_start();

?>

<!DOCTYPE html>

<html>
	<head>
		<link rel="stylesheet" type="text/css" href="index.css">
		<meta charset="utf-8" />
		<title></title>
	</head>
	<body>
		<header>
			<nav>
				<div class="main-wrapper">
					<div class="content">
						<ul>
							<li>
								<a href="index.php"><button class="nav-buttons">Home</button></a>
								<button class="save-load" onClick="save()">Save</button>
	      						<button class="save-load" onClick="load()">load</button>
	      						<button class="save-load" onClick="reset()">Reset</button>
							</li>
							
						</ul>
						<div class="nav-login">
							<?php
								if (isset($_SESSION['u_id'])) {
									$uid = $_SESSION['u_id'];
									echo '<form action="logout.inc.php" method="POST">
											<button type="submit" name="submit" class="login-logout">Logout</button>
										</form>';
								} else {
									echo '<form action="login.inc.php" method="POST">
											<input type="text" name="uid" placeholder="Username/e-mail">
											<input type="password" name="pwd" placeholder="Password">
											<button type="submit" name="submit" class="login-logout">Login</button>
											<a href="signup.php" style="padding-left: 4px;"><button class="login-logout">Sign Up</button></a>
										</form>
										';
								}
							?>
						</div>
					</div>
				</div>
			</nav>
		</header>
		<style type="text/javascript" scr="index.js"></style>
	</body>
</html>
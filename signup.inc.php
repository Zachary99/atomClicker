<?php
#first if
if (isset($_POST['submit'])) {

	include 'dbh.inc.php';

	$first = mysqli_real_escape_string( $conn , $_POST['first']);
	$last = mysqli_real_escape_string( $conn , $_POST['last']);
	$email = mysqli_real_escape_string( $conn , $_POST['email']);
	$uid = mysqli_real_escape_string( $conn , $_POST['uid']);
	$pwd = mysqli_real_escape_string( $conn , $_POST['pwd']);

	//Error handelers
	//Check for empty field
	#second if
	if (empty($first) || empty($last) || empty($email) || empty($uid) || empty($pwd)) {
		header("Location: signup.php?signup=empty");
		exit();
	} /*second else*/ else{
		//Check if input character are valid
		# third if
		if (!preg_match("/^[a-zA-Z]*$/" , $first) || !preg_match("/^[a-zA-Z]*$/" , $last) ) {
			
			header("Location: signup.php?signup=invalid");
			exit();
		} /*third else*/ else{
			// Check if email is valid
			#forth if
			if (!filter_var( $email , FILTER_VALIDATE_EMAIL )) {
				
				header("Location: signup.php?signup=email");
				exit();
			} /*forth else*/ else {
				$sql = "SELECT * FROM users WHERE user_uid='$uid'";
				$result = mysqli_query($conn , $sql);
				$resultCheck = mysqli_num_rows($result);

				#fifth if
				if ($resultCheck > 0) {
					header("Location: signup.php?signup=usertaken");
					exit();
				} /*forth else*/ else {
					//Hashing the password
					$hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);
					//Inser the user into the database
					$sql = "INSERT INTO users (user_first , user_last , user_email , user_uid , user_pwd) VALUES ('$first','$last','$email','$uid','$hashedPwd');";
					mysqli_query($conn , $sql);
					header("Location: signup.php?signup=success");
					exit();
				}
			}
		}
	}

} /*first else*/ else {
	header("Location: ../signup.php");
	exit();
}
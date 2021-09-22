<?php
//turn on php error reporting

require_once("../include/db_config.html");
require_once("../include/acm_membership_config.html");
if(!$acm->CheckLogin())
{
    header("Location: ../login.html?loginerror=true");
}
if(!$acm->isUserInRole("wceauthor"))
{
	$role = $acm->UserRole();
  header("Location: ../".$role."/index.html");
}

$acm->UpdateSessionVars();

$status = $acm->UserStatus();
if($status <2)
{
    header("Location: index.html?profileerror=true");  
}


$username = $acm->UserFullName();
$userid = $acm->User_Id();
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	
	$name     = $_FILES['file']['name'];
	$tmpName  = $_FILES['file']['tmp_name'];
	$error    = $_FILES['file']['error'];
	$size     = $_FILES['file']['size'];
    $ext	  = strtolower(pathinfo($name, PATHINFO_EXTENSION));
    $file_label = $_POST['file_label'];
    $paperid = $_POST['paper_id'];
  	$response="";
	switch ($error) {
		case UPLOAD_ERR_OK:
			$valid = true;
			//validate file extensions
			if ( !in_array($ext, array('doc','docx','pdf','rtf','jpg','png','tiff')) ) {
				$valid = false;
				$response = 'Invalid file extension.';
			}
			
			/*//validate file size
			if ( $size/1024/1024 > 2 ) {
				$valid = false;
				$response = 'File size is exceeding maximum allowed size.';
			}*/
			//upload file
			if ($valid) {

				$newfilename= $username."_".round(microtime(true)).'.'.$ext;
				$targetPath =  'uploads/abstract/'. $newfilename;
				move_uploaded_file($tmpName,$targetPath); 
				$sql = "insert into crf_abstract (file_label, file_link,paper_id) values('$file_label','$targetPath','$paperid')";
				if(mysqli_query($conn, $sql)){
				header( 'Location: copyright.html?upload=success' ) ;		
				} 
				else{
				header( 'Location: copyright.html?upload=failed' ) ;		
				}
			exit;
			}
			break;
		case UPLOAD_ERR_INI_SIZE:
			$response = 'The uploaded file exceeds the upload_max_filesize directive in php.ini.';
			break;
		case UPLOAD_ERR_PARTIAL:
			$response = 'The uploaded file was only partially uploaded.';
			break;
		case UPLOAD_ERR_NO_FILE:
			$response = 'No file was uploaded.';
			break;
		case UPLOAD_ERR_NO_TMP_DIR:
			$response = 'Missing a temporary folder. Introduced in PHP 4.3.10 and PHP 5.0.3.';
			break;
		case UPLOAD_ERR_CANT_WRITE:
			$response = 'Failed to write file to disk. Introduced in PHP 5.1.0.';
			break;
		default:
			$response = 'Unknown error';
		break;
	}

	echo $response;
}
 
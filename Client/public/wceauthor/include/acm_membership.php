<?PHP
/*
    Registration/Login script from HTML Form Guide
    V1.0

    This program is free software published under the
    terms of the GNU Lesser General Public License.
    http://www.gnu.org/copyleft/lesser.html
    

This program is distributed in the hope that it will
be useful - WITHOUT ANY WARRANTY; without even the
implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE.

For updates, please visit:
http://www.html-form-guide.com/php-form/php-registration-form.html
http://www.html-form-guide.com/php-form/php-login-form.html

*/
require_once("class.htmlmailer.html");
require_once("formvalidator.html");

class ACMMembership
{
    var $admin_email;
    var $from_address;
    
    var $username;
    var $pwd;
    var $database;
    var $tablename;
    var $connection;
    var $rand_key;
    var $port;
    var $error_message;
    
    //-----Initialization -------
    function ACMMembership()
    {
        $this->sitename = 'cbainc.in';
        $this->rand_key = '0iQx5oBk66oVZep';
        $this->sitemail='cbainc.in';
        $this->sitecontact='12354669';
        $this->sitefb='fb.com';
        $this->sitetwitter='twitter.com';
        $this->sitelinked='linkedin.com';
        $this->sitegplus='gplus.com';
        if(!isset($_SESSION)){ session_start(); }
    }
    
    function InitDB($host,$uname,$pwd,$database,$tablename,$port)
    {
        $this->db_host  = $host;
        $this->username = $uname;
        $this->pwd  = $pwd;
        $this->database  = $database;
        $this->tablename = $tablename;
        $this->port = $port;
    }
    function SetAdminEmail($email)
    {
        $this->admin_email = $email;
    }
    
     function AdminEmail()
    {
            return $this->admin_email;
    }
    function SetWebsiteName($sitename)
    {
        $this->sitename = $sitename;
    }
    function SetSiteContact($sitecontact)
    {
        $this->sitecontact = $sitecontact;    
    }
    
    function SetSiteEmail($sitemail)
    {
        $this->sitemail = $sitemail;    
    }
    
    function SetSiteFB($sitefb)
    {
        $this->sitefb = $sitefb;    
    }
    
    function SetSiteTwitter($sitetwitter)
    {
        $this->sitetwitter = $sitetwitter;    
    }
    
    function SetSiteLinkedIn($sitelinked)
    {
        $this->sitelinked = $sitelinked;    
    }
    
    function SetSiteGplus($sitegplus)
    {
        $this->sitegplus = $sitegplus;    
    }
    
    function SetRandomKey($key)
    {
        $this->rand_key = $key;
    }
    
    function SiteName()
    {
            return $this->sitename;
    }

    //-------Main Operations ----------------------
    function RegisterUser()
    {
        if(!isset($_POST['registered']))
        {
           return false;
        }
        
        $formvars = array();
        
        if(!$this->ValidateRegistrationSubmission())
        {
            return false;
        }
        
        $this->CollectRegistrationSubmission($formvars);
        
        if(!$this->SaveToDatabase($formvars))
        {
            return false;
        }
        
        
        return true;
    }

    
    function Login()
    {
        if(empty($_POST['email']))
        {
            $this->HandleError("Email is empty!");
            return false;
        }
        
        if(empty($_POST['password']))
        {
            $this->HandleError("Password is empty!");
            return false;
        }
        
        $email = trim($_POST['email']);
        $password = trim($_POST['password']);
        
        if(!isset($_SESSION)){ session_start(); }
        if(!$this->CheckLoginInDB($email,$password))
        {
            return false;
        }
        
        $_SESSION[$this->GetLoginSessionVar()] = $email;
        
        return true;
    }
    
    function CheckLogin()
    {
         if(!isset($_SESSION)){ session_start(); }

         $sessionvar = $this->GetLoginSessionVar();
         
         if(empty($_SESSION[$sessionvar]))
         {
            return false;
         }
         return true;
    }
   
    function UserFirstName()
    {
        return isset($_SESSION['first_name_of_user'])?$_SESSION['first_name_of_user']:'';
    }
    
    function UserLastName()
    {
        return isset($_SESSION['last_name_of_user'])?$_SESSION['last_name_of_user']:'';
    }

    function UserFullName()
    {
        return isset($_SESSION['name_of_user'])?$_SESSION['name_of_user']:'';
    }
    
    function UserEmail()
    {
        return isset($_SESSION['email_of_user'])?$_SESSION['email_of_user']:'';
    }

    function User_Id()
    {
            return isset($_SESSION['user_id'])?$_SESSION['user_id']:'';
    }

    function UserContact()
    {
        return isset($_SESSION['contact_of_user'])?$_SESSION['contact_of_user']:'';
    }
    
    function UserGender()
    {
        return isset($_SESSION['gender_of_user'])?$_SESSION['gender_of_user']:'';
    }
    
    function UserInstitute()
    {
        return isset($_SESSION['institute_of_user'])?$_SESSION['institute_of_user']:'';
    }
    
    function UserCourse()
    {
        return isset($_SESSION['course_of_user'])?$_SESSION['course_of_user']:'';
    }
    
    function UserDepartment()
    {
        return isset($_SESSION['dept_of_user'])?$_SESSION['dept_of_user']:'';
    }
    
    function UserCity()
    {
        return isset($_SESSION['city_of_user'])?$_SESSION['city_of_user']:'';
    }
    
    function UserProfilePic()
    {
        return isset($_SESSION['pic_of_user'])?$_SESSION['pic_of_user']:'';
    }
    
    function UserRole()
    {
        return isset($_SESSION['role_of_user'])?$_SESSION['role_of_user']:'';
    }
    
    function UserStatus()
    {
        return isset($_SESSION['status_of_user'])?$_SESSION['status_of_user']:'';
    }
    function SiteEmail()
    {
            return $this->sitemail;
    }
    function SiteContact()
    {
            return $this->sitecontact;
    }
    function SiteFB()
    {
            return $this->sitefb;
    }
    function SiteTwitter()
    {
            return $this->sitetwitter;
    }
    
    function SiteLinkedIn()
    {
            return $this->sitelinked;
    }
    
    function SiteGplus()
    {
            return $this->sitegplus;
    }
    function LogOut()
    {
        if(!$_SESSION){session_start();}

        $sessionuser = $this->User_Id();

        unset($_SESSION["cart_registration"][$sessionuser]);

        $sessionvar = $this->GetLoginSessionVar();
        
        $_SESSION[$sessionvar]=NULL;
        
        unset($_SESSION[$sessionvar]);

    }
    
    function ResetPassword()
    {
    }
    
    function ChangePassword($new_pwd,$user_id)
    {

        $new_pwd = $this->Sanitize($new_pwd);
        $md5newpwd = md5($new_pwd);
        $qry = "Update $this->tablename Set password='".$md5newpwd."' Where  user_id=".$user_id."";
        if(!mysqli_query( $qry ,$this->connection))
        {
            $this->HandleDBError("Error updating the password \nquery:$qry");
            return false;
        }     
        return true;
    }
    
    //-------Public Helper functions -------------
    function GetSelfScript()
    {
        return htmlentities($_SERVER['PHP_SELF']);
    }    
    
    function SafeDisplay($value_name)
    {
        if(empty($_POST[$value_name]))
        {
            return'';
        }
        return htmlentities($_POST[$value_name]);
    }
    
    function RedirectToURL($url)
    {
        header("Location: $url");
        exit;
    }
    
    function GetSpamTrapInputName()
    {
        return 'sp'.md5('KHGdnbvsgst'.$this->rand_key);
    }
    
    function GetErrorMessage()
    {
        if(empty($this->error_message))
        {
            return '';
        }
        $errormsg = nl2br(htmlentities($this->error_message));
        return $errormsg;
    }    
    //-------Private Helper functions-----------
    
    function HandleError($err)
    {
        $this->error_message .= $err."\r\n";
    }
    
    function HandleDBError($err)
    {
        $this->HandleError($err."\r\n mysqlierror:".mysqli_error($this->connection));
    }
    
    function GetLoginSessionVar()
    {
        $retvar = md5($this->rand_key);
        $retvar = 'usr_'.substr($retvar,0,10);
        return $retvar;
    }
    
    function CheckLoginInDB($email,$password)
    {
        if(!$this->DBLogin())
        {
            $this->HandleError("Database login failed!");
            return false;
        }          
        $email = $this->SanitizeForSQL($email);
        $pwdmd5 = md5($password);
        $qry = "select u.user_id,u.email,u.f_name,u.l_name,u.contact,u.gender,u.profile_pic,u.status,u.user_role,i.institute_name,c.course_name,d.department_name,ci.city_name from users u inner join institute i inner join department d inner join course c inner join city ci on u.institute_id = i.institute_id AND u.department_id = d.department_id AND u.course_id = c.course_id AND u.city_id = ci.city_id where email='$email' and password='$pwdmd5' AND u.status > 0 ";        
        $result = mysqli_query($this->connection,$qry);
        
        if(!$result || mysqli_num_rows($result) <= 0)
        {
            $this->HandleError("Error logging in. The Email or password does not match");
            return false;
        }
        
        $row = mysqli_fetch_assoc($result);
        
        $_SESSION['user_id']=$row['user_id'];
        $_SESSION['email_of_user']=$row['email'];
        $_SESSION['first_name_of_user']=$row['f_name'];
        $_SESSION['last_name_of_user']=$row['l_name']; 
        $_SESSION['name_of_user']=$row['f_name']." ".$row['l_name'];
        $_SESSION['status_of_user']=$row['status'];
        $_SESSION['contact_of_user']=$row['contact'];
        $_SESSION['gender_of_user']=$row['gender'];
        $_SESSION['institute_of_user']=$row['institute_name'];
        $_SESSION['course_of_user']=$row['course_name'];
        $_SESSION['dept_of_user']=$row['department_name'];
        $_SESSION['city_of_user']=$row['city_name'];
        $_SESSION['pic_of_user']=$row['profile_pic'];

        $_SESSION['role_of_user']=$row['user_role'];
        return true;
    }

    function UpdateSessionVars()
    {
        $userid = $this->User_Id();
         if(!$this->DBLogin())
        {
            $this->HandleError("Database login failed!");
            return false;
        }  
        $sql = "select u.user_id,u.email,u.f_name,u.l_name,u.contact,u.gender,u.profile_pic,u.status,u.user_role,i.institute_name,c.course_name,d.department_name,ci.city_name from users u inner join institute i inner join department d inner join course c inner join city ci on u.institute_id = i.institute_id AND u.department_id = d.department_id AND u.course_id = c.course_id AND u.city_id = ci.city_id where user_id='$userid'";        
        $result = mysqli_query($this->connection,$sql);
        
        if(!$result || mysqli_num_rows($result) <= 0)
        {
            $this->HandleError("Error logging in. The Email or password does not match");
            return false;
        }
        
        $row = mysqli_fetch_assoc($result);
       
        $_SESSION['user_id']=$row['user_id'];
        $_SESSION['email_of_user']=$row['email'];
        $_SESSION['first_name_of_user']=$row['f_name'];
        $_SESSION['last_name_of_user']=$row['l_name']; 
        $_SESSION['name_of_user']=$row['f_name']." ".$row['l_name'];
        $_SESSION['status_of_user']=$row['status'];
        $_SESSION['contact_of_user']=$row['contact'];
        $_SESSION['gender_of_user']=$row['gender'];
        $_SESSION['institute_of_user']=$row['institute_name'];
        $_SESSION['course_of_user']=$row['course_name'];
        $_SESSION['dept_of_user']=$row['department_name'];
        $_SESSION['city_of_user']=$row['city_name'];
        $_SESSION['pic_of_user']=$row['profile_pic'];
        $_SESSION['role_of_user']=$row['user_role'];    
        return true;
    }
    
  
    function ResetUserPasswordInDB($user_rec)
    {
        $new_password = substr(md5(uniqid()),0,10);
        
        if(false == $this->ChangePasswordInDB($user_rec,$new_password))
        {
            return false;
        }
        return $new_password;
    }
    
    function ChangePasswordInDB($user_rec, $newpwd)
    {
        $newpwd = $this->SanitizeForSQL($newpwd);
        
        $qry = "Update $this->tablename Set password='".md5($newpwd)."' Where  user_id=".$user_rec['user_id']."";
        
        if(!mysqli_query( $this->connection, $qry))
        {
            $this->HandleDBError("Error updating the password \nquery:$qry");
            return false;
        }     
        return true;
    }
    
    function GetUserFromEmail($email,&$user_rec)
    {
        if(!$this->DBLogin())
        {
            $this->HandleError("Database login failed!");
            return false;
        }   
        $email = $this->SanitizeForSQL($email);
        
        $result = mysqli_query($this->connection,"Select * from $this->tablename where email='$email'");  

        if(!$result || mysqli_num_rows($result) <= 0)
        {
            $this->HandleError("There is no user with email: $email");
            return false;
        }
        $user_rec = mysqli_fetch_assoc($result);

        
        return true;
    }
    function SaveToDatabase(&$formvars)
    {
        if(!$this->DBLogin())
        {
            $this->HandleError("Database login failed!");
            return false;
        }
        if(!$this->Ensuretable())
        {
            return false;
        }
        if(!$this->IsFieldUnique($formvars,'email'))
        {
            $this->HandleError("This email is already registered");
            return false;
        }
             
        if(!$this->InsertIntoDB($formvars))
        {
            $this->HandleError("Inserting to Database failed!");
            return false;
        }
        return true;
    }
    
    function IsFieldUnique($formvars,$fieldname)
    {
        $field_val = $this->SanitizeForSQL($formvars[$fieldname]);
        $qry = "select email from $this->tablename where $fieldname='".$field_val."'";
        $result = mysqli_query($this->connection,$qry);   
        if($result && mysqli_num_rows($result) > 0)
        {
            return false;
        }
        return true;
    }
    
    function DBLogin()
    {

        $this->connection = mysqli_connect($this->db_host,$this->username,$this->pwd,$this->database,$this->port);

        if(!$this->connection)
        {   
            $this->HandleDBError("Database Login failed! Please make sure that the DB login credentials provided are correct");
            return false;
        }
        if(!mysqli_select_db($this->connection,$this->database))
        {
            $this->HandleDBError('Failed to select database: '.$this->database.' Please make sure that the database name provided is correct');
            return false;
        }
        if(!mysqli_query($this->connection,"SET NAMES 'UTF8'"))
        {
            $this->HandleDBError('Error setting utf8 encoding');
            return false;
        }
        return true;
    }    
    
    function Ensuretable()
    {
        $result = mysqli_query($this->connection,"SHOW COLUMNS FROM $this->tablename");   
        if(!$result || mysqli_num_rows($result) <= 0)
        {
            return $this->CreateTable();
        }
        return true;
    }
    
    function CreateTable()
    {
        $qry = "CREATE TABLE `$this->tablename` (
  `user_id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `f_name` varchar(255) NOT NULL,
  `l_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `gender` varchar(20) DEFAULT 'Not Available',
  `institute_id` int(10) DEFAULT '1',
  `course_id` int(10) DEFAULT '1',
  `department_id` int(10) DEFAULT '1',
  `city_id` int(10) DEFAULT '1',
  `profile_pic` varchar(1000) DEFAULT 'images/users/default.jpg',
  `status` int(10) NOT NULL DEFAULT '2'
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
                ALTER TABLE `$this->tablename`
                 ADD PRIMARY KEY (`user_id`),
  ADD KEY `institute_id` (`institute_id`,`course_id`,`department_id`,`city_id`),
  ADD KEY `fk_user_department` (`department_id`),
  ADD KEY `fk_user_course` (`course_id`),
  ADD KEY `fk_user_city` (`city_id`);";

        $qry2="ALTER TABLE `$this->tablename` MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT";
        $qry3="ALTER TABLE `$this->tablename` ADD CONSTRAINT `fk_user_city` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`),
                ADD CONSTRAINT `fk_user_course` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`),
                ADD CONSTRAINT `fk_user_department` FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`),
                ADD CONSTRAINT `fk_user_institute` FOREIGN KEY (`institute_id`) REFERENCES `institute` (`institute_id`);";
                
        if(!mysqli_query($this->connection,$qry))
        {
            $this->HandleDBError("Error creating the table \nquery was\n $qry");
            return false;
        }
        if(!mysqli_query($qry2,$this->connection))
        {
            $this->HandleDBError("Error creating the table \nquery was\n $qry");
            return false;
        }
        if(!mysqli_query($qry3,$this->connection))
        {
            $this->HandleDBError("Error creating the table \nquery was\n $qry");
            return false;
        }
        return true;
    }
    
    function InsertIntoDB(&$formvars)
    {   
        $insert_query = 'insert into '.$this->tablename.'(
                f_name,
                l_name,
                email,
                password,
                contact
                )
                values
                (
                "' . $this->SanitizeForSQL($formvars['f_name']) . '",
                "' . $this->SanitizeForSQL($formvars['l_name']) . '",
                "' . $this->SanitizeForSQL($formvars['email']) . '",
                "' . md5($formvars['password']) . '",
                "' . $this->SanitizeForSQL($formvars['contact']) . '"
               )';      
        if(!mysqli_query($this->connection, $insert_query))
        {
            $this->HandleDBError("Error inserting data to the table\nquery:$insert_query");
            return false;
        }        
        return true;
    }

    function SanitizeForSQL($str)
    {
        if( function_exists( "mysqli_real_escape_string" ) )
        {
              $ret_str = mysqli_real_escape_string( $this->connection, $str );
        }
        else
        {
              $ret_str = addslashes( $str );
        }
        return $ret_str;
    }
    
 /*
    Sanitize() function removes any potential threat from the
    data submitted. Prevents email injections or any other hacker attempts.
    if $remove_nl is true, newline chracters are removed from the input.
    */
    function Sanitize($str,$remove_nl=true)
    {
        $str = $this->StripSlashes($str);

        if($remove_nl)
        {
            $injections = array('/(\n+)/i',
                '/(\r+)/i',
                '/(\t+)/i',
                '/(%0A+)/i',
                '/(%0D+)/i',
                '/(%08+)/i',
                '/(%09+)/i'
                );
            $str = preg_replace($injections,'',$str);
        }

        return $str;
    }    
    function StripSlashes($str)
    {
        if(get_magic_quotes_gpc())
        {
            $str = stripslashes($str);
        }
        return $str;
    }   
       function ValidateRegistrationSubmission()
    {
        //This is a hidden input field. Humans won't fill this field.
        if(!empty($_POST[$this->GetSpamTrapInputName()]) )
        {
            //The proper error is not given intentionally
            $this->HandleError("Automated submission prevention: case 2 failed");
            return false;
        }
        
        $validator = new FormValidator();
        $validator->addValidation("f_name","req","Please fill in First Name");
        $validator->addValidation("l_name","req","Please fill in Last Name");
        $validator->addValidation("email","email","The input for Email should be a valid email value");
        $validator->addValidation("contact","req","Please fill in Contact");
        $validator->addValidation("password","req","Please fill in Password");

        
        if(!$validator->ValidateForm())
        {
            $error='';
            $error_hash = $validator->GetErrors();
            foreach($error_hash as $inpname => $inp_err)
            {
                $error .= $inpname.':'.$inp_err."\n";
            }
            $this->HandleError($error);
            return false;
        }        
        return true;
    }
     function CollectRegistrationSubmission(&$formvars)
    {
        $formvars['f_name'] = $this->Sanitize($_POST['f_name']);
        $formvars['l_name'] = $this->Sanitize($_POST['l_name']);
        $formvars['email'] = $this->Sanitize($_POST['email']);
        $formvars['password'] = $this->Sanitize($_POST['password']);
        $formvars['contact'] = $this->Sanitize($_POST['contact']);
    } 
    function isUserInRole($role_name)
    {
        if($this->UserRole() == $role_name)
        {
            return true;
        }
        return false;
    }
}
 
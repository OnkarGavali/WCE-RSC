<?PHP
require_once("./include/acm_membership.html");

$acm = new ACMMembership();

//Provide your site name here
$acm->SetWebsiteName('<img src="images/iferp.png" alt="IFERP" style="width:100px; padding-right:2%;"> WCE Research Symposium on Computing - RSC 2021  ');  //<!--img src="images/ijcse.jpg" alt="IJCSE"-->

//Provide the email address where you want to get notifications
$acm->SetAdminEmail('&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspFIFTH NATIONAL RESEARCH SYMPOSIUM ON COMPUTING');
$acm->SetSiteContact('+91 88057 09102 | 7030226700');
$acm->SetSiteEmail('rsc2021@walchandsangli.ac.in');
$acm->SetSiteFB('#');
$acm->SetSiteTwitter('#');
$acm->SetSiteLinkedIn('#');
$acm->SetSiteGplus('#');

//Provide your database login details here:
//hostname, user name, password, database name and table name
//note that the script will create the table (for example, fgusers in this case)
//by itself on submitting register.html for the first time
$acm->InitDB(/*hostname*/'182.50.133.84',
                      /*username*/'rs',
                      /*password*/'CBAadmin@123',
                      /*database name*/'rs',
                      /*table name*/'users','3306');

//For better security. Get a random string from this link: http://tinyurl.com/randstr
// and put it here
$acm->SetRandomKey('fdsjhAK23dIqpkU');

 
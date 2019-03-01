



function maskhead(){
	// function 4 : Dynamic Maskhead
  var mskid = document.getElementById("maskhead");
 // mskid.setAttribute("class", "maskhead");
  var mskhead = '<A href="index.html"><img src="images/banner.gif" border="0"></a>';
  mskid.innerHTML = mskhead;
}



function navigation2(){
	

var myid = document.getElementById('menu1');


var navi = '<li><a href="index.html">&nbsp;</a></li>';
navi = navi + '<li><a class="mm" href="index.html">Home</a></li>';
navi = navi + '<li><a class="mm" href="#">Congress Information</a></li>';
navi = navi + '<li><a class="mm" href="#">Scientific Programme</a></li>';
navi = navi + '<li><a class="mm" href="#">Speakers Information</a></li>';
navi = navi + '<li><a class="mm" href="#">Abstracts & Competition</a></li>';
navi = navi + '<li><a class="mm" href="#">Registration</a></li>';
navi = navi + '<li><a class="mm" href="#">International Delegates</a></li>';



myid.innerHTML = navi;	

	 			  
}


function navigation(){
	
// function 1: dynamic menu start
var myid = document.getElementById('topnav_sf');

var navi = '<ul id="nav">';

navi = navi + '<li><a href="index.html">Home</a></li>';

navi = navi + '<li><a class="mm" href="#">Congress Information</a>';
navi = navi + '<ul><li><a class="mm" href="WelcomeMessage.html">Welcome Message</a></li>';
navi = navi + '<li><a class="mm" href="OrganisingCommittee.html">Organising Committee</a></li>';
navi = navi + '<li><a class="mm" href="OrganisingCommittee.html#SC">Scientific Committee</a></li>';
navi = navi + '<li><a class="mm" href="AboutSHBC2012.html">About SHBC 2012 </a></li></ul>';
navi = navi + '</li>';


navi = navi + '<li><a class="mm" href="#">Scientific Programme</a>';
navi = navi + '<ul>';
navi = navi + '<li><a class="mm" href="Keynote&PlenarySessions.html">Keynote and Plenary Sessions</a></li>';
navi = navi + '<li><a class="mm" href="mainCongressTrack1.html">Main Congress Tracks - Day 1</a></li>';
navi = navi + '<li><a class="mm" href="mainCongressTrack2.html">Main Congress Tracks - Day 2</a></li>';
navi = navi + '<li><a class="mm" href="ScientificProgramme_Pre-CongressWorkshops.html">Pre-Congress Workshops</a></li>';
navi = navi + '<li><a class="mm" href="PrimaryCareForum2012.html">Primary Care Forum 2012</a></li>';
navi = navi + '<li><a class="mm" href="NHGQualityConvention2012.html">NHG Quality Convention 2012</a></li>';
navi = navi + '</ul></li>';

navi = navi + '<li><a class="mm" href="#">Speakers Information</a>';
navi = navi + '<ul>';
navi = navi + '<li><a class="mm" href="Keynote&PlenarySpeakers.html">Keynote and Plenary Speakers</a></li>';
navi = navi + '<li><a class="mm" href="congresstracksspeakers.html">Congress Tracks Speakers</a></li>';
//navi = navi + '<li><a class="mm" href="OurSpeakers.html">Our Speakers</a></li>';
navi = navi + '</ul>';
navi = navi + '</li>';



navi = navi + '<li><a class="mm" href="#">Abstracts & Competition</a>';
navi = navi + '<ul>';
//navi = navi + '<li><a class="mm" href="Announcement_online.html">Announcement</a></li>';
navi = navi + '<li><a class="mm" href="AboutTheScientificCompetition.html">About the Scientific Competition </a></li>';
navi = navi + '<li><a class="mm" href="CategoriesAndEntryCriteria.html">Categories and Entry Criteria &nbsp;</a></li>';
navi = navi + '<li><a class="mm" href="GeneralInformationOnAbstractSubmission.html">General Information</a></li>';
navi = navi + '<li><a class="mm" href="AbstractTermsCondition.html">Terms & Conditions</a></li> ';    
//navi = navi + '<li><a class="mm" href="http://203.127.83.176/shbc2012/abstractwelcome.aspx">Submit Abstracts Online</a></li></ul> ';
navi = navi + '<li><a class="mm" href="http://203.127.83.176/shbc2012/abstractwelcome.aspx">Submit Abstracts Online</a></li></ul> ';


navi = navi + '</li>';

navi = navi + '<li><a class="mm" href="#">Registration</a>';
navi = navi + '<ul>';
//navi = navi + '<li><a class="mm" href="Announcement_online.html">Announcement</a></li>';
navi = navi + '<li><a class="mm" href="Registration.html">Schedule of Fees</a></li>';
navi = navi + '<li><a class="mm" href="RegistrationGeneralInfo.html">General Information</a></li>';
navi = navi + '<li><a class="mm" href="RegistrationTermsCondition.html">Terms & Conditions &nbsp;&nbsp;</a></li>';
//navi = navi + '<li><a class="mm" href="Announcement_online.html">Register Online</a></li></ul>';
//navi = navi + '<li><a class="mm" href="http://203.127.83.176/shbc2012/welcome.aspx">Register Online</a></li>';
navi = navi + '</ul>';
navi = navi + '</li>';

navi = navi + '<li><a class="mm" href="#">International Delegates</a>';
navi = navi + '<ul><li><a class="mm" href="AboutSingapore.html">About Singapore </a></li>';
navi = navi + '<li><a class="mm" href="AboutSingapore.html#CV">About Congress Venue</a></li>';
navi = navi + '<li><a class="mm" href="AboutSingapore.html#Visa">Entry Visa Requirements</a></li></ul>';
navi = navi + '</li>';


navi = navi + '</ul>';



myid.innerHTML = navi;	

			  
}

function myleftmedia(){
	var myleftmedia = document.getElementById("btmleft");
	var content ='<img src="images/bottom_new.jpg" border="0" usemap="#ohmybottommapxxrer" />';
	content = content + '<map name="ohmybottommapxxrer" id="ohmybottommapxxrer">';
	
   content = content + '<area shape="rect" coords="288,41,403,94" href="http://www.imh.com.sg/" target="_blank" />';
  content = content + '<area shape="rect" coords="11,40,155,178" href="http://www.nhg.com.sg" target="_blank" />';
  content = content + '<area shape="rect" coords="356,141,447,171" href="http://www.rp.edu.sg/" target="_blank" />';
  content = content + '<area shape="rect" coords="455,141,503,184" href="http://www.yoursingapore.com" target="_blank" />';
  content = content + '<area shape="rect" coords="536,137,612,189" href="http://www.yoursingapore.com" target="_blank" />';
  content = content + '<area shape="rect" coords="166,41,284,95" href="http://www.ttsh.com.sg" target="_blank" />';
  content = content + '<area shape="rect" coords="406,44,483,117" href="http://www.nhgp.com.sg" target="_blank" />';
  content = content + '<area shape="rect" coords="494,51,536,114" href="http://www.nsc.gov.sg" target="_blank" />';
  content = content + '<area shape="rect" coords="542,43,677,98" href="http://www.pca.sg" target="_blank" />';
  content = content + '<area shape="rect" coords="680,44,785,95" href="http://www.ktph.com.sg" target="_blank" />';
  content = content + '<area shape="rect" coords="790,44,917,100" href="http://www.juronghealth.com.sg/" target="_blank" />';

	content = content + '</map>';


	myleftmedia.innerHTML = content;
	
}



function mymedia(){
	var mymedia = document.getElementById("btmright");
	var content = '<img src="images/img_social.jpg" border="0" usemap="#Map">';
	content = content + '<map name="Map">';
	
	  
  
    content = content + '<area shape="rect" coords="55,23,111,40" href="Contactus.html">';
    content = content + '<area shape="rect" coords="119,24,169,40" href="Feedback.html">';
    content = content + '<area shape="rect" coords="176,23,216,40" href="Archive.html">';
    content = content + '<area shape="rect" coords="74,44,157,101" href="ForwardAFriend.html">';
	
	content = content + '<area shape="rect" coords="174,111,196,137" href="javascript:window.print();">';
	content = content + '  <area shape="rect" coords="123,110,149,138" href="mailto:SHBC_Secretariat@nhg.com.sg">';
	 content = content + ' <area shape="rect" coords="76,112,99,135" href="http://www.twitter.com" target="_blank">';
	 content = content + ' <area shape="rect" coords="30,111,55,134" href="http://www.facebook.com" target="_blank">';
	 //content = content + ' <area shape="rect" coords="12,22,50,39" href="Announcement_online.html"/>';
	content = content + ' <area shape="rect" coords="12,22,50,39" href=" http://203.127.83.176/shbc2012/welcome.aspx">';
    content = content + '</map>';
	mymedia.innerHTML = content;

     	
}

function love(){
	alert('hahaha');
}


function myleftmbtmendedia(){
	
	var btmend = document.getElementById("btmend");
	var content ='Copyright &copy; Singapore Health & Biomedical Congress 2012 Singapore';
	content = content + '<br>';
	content = content + '<A href="Disclaimer.html">Disclaimer</a>';
	content = content + '<br>';
	content = content + 'This Web site is best viewed using Internet Explorer version 8.0 or higher';

	btmend.innerHTML = content;
	
}


function slideshow(){
	var slideshow = document.getElementById("slideshow");
	var content = '<img src="images/slider/banner_mainpage2.jpg" class="active">';
	content = content + '<img src="images/slider/banner_mainpage3.jpg">';
	content = content + '<img src="images/slider/banner_mainpage4.jpg">';
	content = content + '<img src="images/slider/banner_mainpage5.jpg">';
	content = content + '<img src="images/slider/banner_mainpage6.jpg">';
	content = content + '<img src="images/slider/banner_mainpage7.jpg">';
	content = content + '<img src="images/slider/banner_mainpage8.jpg">';

	 slideshow.innerHTML = content;
   	
}






window.onload=function(){

navigation();
maskhead();
myleftmedia();
//slideshow();
myleftmbtmendedia();
mymedia();


}



function prdownload()
{
	window.open("download/AFCC2012_download.pdf")
	
	//window.open('download/ARSR2012_Program.pdf','download',"width=800,height=600,scrollbars=yes");
}

function openwindow()
{
window.open('afesreg/index.asp', 'Registration', 'width=800,height=600,scrollbars=yes');
}

	

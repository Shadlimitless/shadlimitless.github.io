var myImage=document.querySelector('img');

myImage.onclick=function(){
	
	var mySrc=myImage.getAttribute('src');
	if(mySrc=="images/Web front image.jpeg"){
		
		myImage.setAttribute("src","images/imagechange.jpeg");
	}
	else
	{
		myImage.setAttribute("src","images/Web front image.jpeg");
	}
}

var myButton=document.querySelector("button");

var myHeading=document.querySelector("h1");

var setUserName=function() {
	
	var myName=prompt("Please enter your name.");
	
	localStorage.setItem(myName);
	
	myHeading.innerHTML="Mozilla is cool, "+myName); 
	
	/*if(!localStorage.getItem("name")){
	
		setUserName();
	}
	else
	{
		var storedName=locaStorage.getItem("name");
	
		myHeading.innerHTML="Mozilla is cool, "+storedName;
	}	
}


myButton.onclick=function(){
	setUserName();
}*/
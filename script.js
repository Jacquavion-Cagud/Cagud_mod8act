let fullname = prompt("Please enter your full name: ");
    document.getElementById("fname").innerHTML = fullname;
let username = prompt("Please enter your username: ");
    document.getElementById("username").innerHTML = username; 
let gender = confirm("What is your gender? (OK for Male/Cancel for Female) ");
var genderreal;
if (gender === true){
    document.getElementById("gender").innerHTML = "M";
} else {
    document.getElementById("gender").innerHTML = "F";
}
let description = prompt("Describe yourself: ");
    document.getElementById("desc").innerHTML = description;
let birthyear = prompt("Please enter your birth year: ");
var currentyear = 2023; 
var age = currentyear - birthyear; 
    document.getElementById("year").innerHTML = birthyear;
    document.getElementById("age").innerHTML = age;

let pfpsequence = confirm("Do you wish to use a custom profile picture? (Y/N) ");
if (pfpsequence === true){
    var profpic = prompt("Enter the file name of the profile picture: ");
	document.getElementById("ppic").setAttribute("src", profpic);
	alert("Custom profile picture set. ");
} else {
    alert("A profile picture will not be uploaded. ");
}

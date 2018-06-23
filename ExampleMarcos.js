var firstName = prompt("Hello and Welcome. Please enter your first name:");
var lastName = prompt("Please enter your Last Name:");
var age = prompt("How old are you?");
var height = prompt("How tall are you in centimeters?");
var petName = prompt("What is the name of your pet?");
alert("Thank you so much for the information.")

//Four Conditions need to be true for the Spy message
var nameC=null;
var ageC=null;
var heightC=null;
var petC=null;

//Spy needs first letter of 1st name and last name to be the same
if (firstName[0] === lastName[0]) {
  nameC=true;
}else {
    nameC=false;
  }

  //Age has to between 20 and 30
  if (age > 20 && age< 30) {
    ageC=true; }
    else {
      ageC=false;
    }

    //height greater then 170
    if (height >= 170) {
  heightC=true;
    }
  else {
    heightC=false;
  }
//PET Name
if (petName[petName.length-1] === "y") {
  petC=true
}else {
  petC=true
}

//CHECK Conditions
if (nameC && ageC && heightC && petC ) {
  console.log("Welcome Russian Spy!");
}else {
  console.log("Nothing to see here punk");
}

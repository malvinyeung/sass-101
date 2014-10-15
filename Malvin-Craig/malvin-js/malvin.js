function Form(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var button = document.getElementById("submit");

button.onclick = function() {
  var output = document.getElementById("output");
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var form1 = new Form(firstName, lastName);
  alert("Thanks for signing up, " + form1.firstName + " " + form1.lastName + "!");
};


function Form(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var button = document.getElementById("submit2");

button.onclick = function() {
  var output = document.getElementById("output");
  var firstName = document.getElementById("firstName2").value;
  var lastName = document.getElementById("lastName2").value;
  var form1 = new Form(firstName, lastName);
  output.textContent = "Thanks for signing up, " + form1.firstName + " " + form1.lastName + "!";
};

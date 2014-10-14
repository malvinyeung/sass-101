var form = new Object();
var output = document.getElementById("output");

document.getElementById("submit").onClick = function() {
  form.firstName = document.getElementById("firstName");
  form.lastName = document.getElementById("lastName");
  output.textContent = "Thanks for signing up, " + form.firstName + " " + form.lastName + "!";
};

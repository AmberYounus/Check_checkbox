//create a function to checked the checkbox
function myCheckbox() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");

//if the checkbox is checked,display the output
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

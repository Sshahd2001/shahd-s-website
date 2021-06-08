var getTheUserName = prompt("Hello! Who are you?");

console.log(getTheUserName);

document.getElementById("Username").innerText = getTheUserName;

//tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
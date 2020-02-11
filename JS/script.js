//Knapp för att ta bort "riven lore" texten//

function myFunction() {
  var x = document.getElementById("brödtext");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("knapp").innerHTML = "Remove text";
  } else {
    x.style.display = "none";
    document.getElementById("knapp").innerHTML = "Get text";
  }
}
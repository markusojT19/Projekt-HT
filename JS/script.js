//Knapp för att ta bort "riven lore" texten//

function myFunction() {
  var x = document.getElementById("brödtext");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
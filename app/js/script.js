/* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */

function myFunction () {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav () {
    document.getElementById("myNav").style.width = "0%";
}
let hamburger = document.getElementById("button--hamburger");
console.log(hamburger);

hamburger.addEventListener('click', displayNav);

function displayNav() {

    console.log("hallo");

    let hamburgerstyle = document.getElementById("toggle--nav");

    console.log(hamburgerstyle.style);

    if (hamburgerstyle.style.display == "block") {
        hamburgerstyle.style.display = "none";

    } else {

        hamburgerstyle.style.display = "block";
    }
};
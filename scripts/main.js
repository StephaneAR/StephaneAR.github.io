let myImage = document.querySelector("img");
myImage.addEventListener("click", function() {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/pizza-icon.jpg"){myImage.setAttribute("src",  "images/part-de-pizza.jpg");
} else {
    myImage.setAttribute("src", "images/pizza-icon.jpg");
}    
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Veuillez saisir votre nom.");
    localStorage.setItem("nom", myName);
    myHeading.textContent = "La pizza, c'est la vie " + myName;
}

if (!localStorage.getItem("nom")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("nom");
    myHeading.textContent = "La pizza, c'est la vie " + storedName;
}

myButton.addEventListener("click", function() {
    setUserName();
});
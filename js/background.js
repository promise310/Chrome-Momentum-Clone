const images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "8.png"];

//get a random number based on my array length
const chosenImg = images[Math.floor(Math.random()*images.length)];

//create img Html from Javascript
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImg}`;

//appendChild - put at the end of an HTML code
document.body.appendChild(bgImage);
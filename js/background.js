const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

//get a random number based on my array length
const chosenImg = images[Math.floor(Math.random()*images.length)];

//create img Html from Javascript
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImg}`;

//appendChild - put at the end of an HTML code
document.body.appendChild(bgImage);
// Create an array containing the 5 imgs

const itemsContainer = document.querySelector(".items");

const images = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];
console.log(itemsContainer);
//I create the cyle to add elements in HTMLA a loop iterates
for (let i = 0; i < images.length; i++) {
  const photo = images[i];
  let item = document.createElement("div");

  item.classList.add("item");
  item.innerHTML = `<img src="${photo}"/>`;

  itemsContainer.append(item);
  //Adds the "active" class to the initially displayed image.
  if (i === 0) {
    item.classList.add("active");
  }
}
//Initialization of a variable to keep track of the index of the currently displayed image
let currentImageIndex = 0;

const items = document.querySelectorAll(".item");
//aggiungo evento click al pulsante next
const btnNext = document.querySelector(".btn-next");

btnNext.addEventListener('click', function() {
// Create an array containing the 5 imgs
const Your_Advice = "Gold";
const itemsContainer = document.querySelector(".items"); // Container of all slides

const images = [
  "img/01.webp", // 0
  "img/02.webp", // 1
  "img/03.webp", // 2
  "img/04.webp",
  "img/05.webp",
];

console.log(itemsContainer);

//I create the cyle to add elements in HTMLA a loop iterates
for (let i = 0; i < images.length; i++) {
  const photo = images[i];
  let item = document.createElement("div");

  item.classList.add("item");
  item.innerHTML = `<img src="assets/${photo}"/>`;
  console.log(item);
  itemsContainer.append(item);
  //Adds the "active" class to the initially displayed image.
  if (i === 0) {
    item.classList.add("active");
  }
}
//Initialization of a variable to keep track of the index of the currently displayed image
let currentImageIndex = 0; // active image

const items = document.querySelectorAll(".item");
//aggiungo evento click al pulsante next
const btnNext = document.querySelector(".btn-next");

btnNext.addEventListener("click", function () {
  items[currentImageIndex].classList.remove("active");
  if (currentImageIndex === images.length - 1) {
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }
  items[currentImageIndex].classList.add("active");

  // logic for increment currentImageIndex++ , change the active image, remove current active image
});

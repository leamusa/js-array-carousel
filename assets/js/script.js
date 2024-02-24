// Array containing the paths of 5 images
const images = [
  "img/01.webp", // 0
  "img/02.webp", // 1
  "img/03.webp", // 2
  "img/04.webp", // 3
  "img/05.webp", // 4
];

// Select the container of all slides in the HTML
const itemsContainer = document.querySelector(".items");

// Log the itemsContainer to the console
console.log(itemsContainer);

// Loop through the images array to create and append HTML elements for each image
for (let i = 0; i < images.length; i++) {
  const photo = images[i];
  let item = document.createElement("div");

  // Add the "item" class to the created element
  item.classList.add("item");

  // Set the inner HTML of the created element with an image tag
  item.innerHTML = `<img src="assets/${photo}"/>`;

  // Log the created item to the console
  console.log(item);

  // Append the created item to the itemsContainer
  itemsContainer.append(item);

  // Adds the "active" class to the initially displayed image (first element)
  if (i === 0) {
    item.classList.add("active");
  }
}

// Initialization: Set the currentImageIndex to 0 (index of the initially displayed image)
let currentImageIndex = 0;

// Select all elements with the class "item"
const items = document.querySelectorAll(".item");

// Select the button element with the class ".btn-next"
const btnNext = document.querySelector(".btn-next");

// Add a click event listener to the "next" button
btnNext.addEventListener("click", function () {
  // Remove the "active" class from the current element in the sequence
  items[currentImageIndex].classList.remove("active");

  // Check if the current element is the last in the sequence
  if (currentImageIndex === images.length - 1) {
    // If it is the last, set the index to 0 (beginning of the sequence)
    currentImageIndex = 0;
  } else {
    // If not the last, increment the index by 1
    currentImageIndex++;
  }

  // Add the "active" class to the element indicated by the updated index
  items[currentImageIndex].classList.add("active");
});

// Select the button element with the class ".btn-prev"
const btnPrev = document.querySelector(".btn-prev");

// Add a click event listener to the "prev" button
btnPrev.addEventListener("click", function () {
  // Remove the "active" class from the current element in the sequence
  items[currentImageIndex].classList.remove("active");

  // Check if the current element is the first in the sequence
  if (currentImageIndex === 0) {
    // If it is the first, set the index to the maximum value (last element of the sequence)
    currentImageIndex = images.length - 1;
  } else {
    // If not the first, decrement the index by 1
    currentImageIndex--;
  }

  // Add the "active" class to the element indicated by the updated index
  items[currentImageIndex].classList.add("active");
});

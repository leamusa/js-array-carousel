# js-array-carousel

# Description

Give an array containing a list of 5 imgs, (create a carousel as in the attached screenshot).

# MILESTONE 1

First, create a static markup:

1. build a container and insert a big img in the center
2. create the style
   Only if you build the base structure after you can be concentrate to the logic aspect.

# MILESTONE 2

Now we remove all static markup and insert all images dynamically:

1.  using the provided array and a simple for loop that concatenates a literal template.

2.  All images will be hidden, except the **first**, which will have a specific class that will make it visible.
    3.At this point you'll find yourself with the same slider styled in milestone 1, but built dynamically through JavaScript.

# MILESTONE 3

# condition

1. When the user clicks on the arrows, the program will change the active image, which will then be displayed instead of the previous one.

# BONUS 1:

1. Add the infinite cycle FOR the carousel:

IF the first image is active and the user clicks the arrow to go to the previous image, the last image of the array must appear and reverse.

# Tips of the day:

1. Let’s build a carousel a static version containing only one image.
2. comment (obscure) some elements to be able to reproduce them dynamically in js. We can then use them as "templates".
3. We always write first by points our algorithm in Italian to understand what we want to do
4. At the right time (ihihhi will be up to you to figure out which one) answer this question: "How many cycles do you need?"

# tools

Dynamic cyclic of scrolling effect of imgs, (both) forward and backward:

1. Create an array `img` with 5 images.

2. Select items with `document.querySelector` and print container's items.

   - Use `document.querySelector` to select the container's items (e.g., `.items`).
   - print the selected container to the console using `console.log`.

3. Dynamically generate HTML elements Creating a loop through `for`:

   - a. Initialize a loop variable `i` with `let i = 0`.
   - b. Continue the loop until `i` is less than the length of the array (`images.length`).
   - c. Increment `i` by 1 in each iteration (`i++`).
   - Inside the loop:
     - Extract current image using `const photo = images[i];`.
     - Create a new `div` element for each image using `let item = document.createElement("div");`.

4. Configuration of init element (index 0) as active with the class "active":

   - Add the class "active" to the first element in the loop to ensure it is initially displayed.

5. Connect "next" and "prev" buttons to functions updating the active img:
   - a. Add an event listener to the "Next" button, (instructing it) to increment the index (`incr++`).
   - b. Add an event listener to the "Prev" button, (instructing it) to decrement the index (`decr--`).
   - c. Inside the event listeners, add or remove the "active" class based on the current img.

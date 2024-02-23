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

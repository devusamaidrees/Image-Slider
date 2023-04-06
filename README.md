# Slideshow
This slideshow is a simple and customizable way to display images with navigation buttons. The slideshow is made up of four image slides with a corresponding slide number and navigation buttons at the bottom.

# Getting Started
To use this slideshow, follow these steps:

Download the files **index.html**, **style.css**, and **script.js**.
Place these files in the same directory.
Open the index.html file in your preferred web browser to view the slideshow.
# How it Works
###### The **slideshow** function takes a slide number as a parameter and displays that slide while hiding all other slides. It also sets the background color of the corresponding dot to black.
The slideshow is controlled by two functions in the **script.js** file. The **controller** function moves the slideshow forward or backward by updating the slide_index variable and calling the slideshow function. The **dots_controller** function allows users to jump to a specific slide by updating the slide_index variable and calling the slideshow function.
##### The HTML code defines the structure and content of the slideshow. Each slide is defined as a `div` element with a class of `slide` and an `img` element containing the image to be displayed. The slide number is displayed using a `p` element with a class of `slide-number`.

##### Navigation buttons are created using `button` elements with a class of `btn` and a unique class for each button (`btn_1`, `btn_2`, etc.). The left and right arrow buttons are created using `span` elements with a class of `arrow` and unique classes for each arrow (`left` and `right`, respectively).

Styling for the slideshow is provided by the **style.css** file

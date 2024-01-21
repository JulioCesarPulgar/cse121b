/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Julio Cesar Pulgar";
let currentYear = new Date().getFullYear();
let profilePicture = "images/placeholder.jpeg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("picture img"); // Assuming the image is within a <picture> element

// Step 4: Adding Content to the Document

// Assign the nameElement's innerHTML property the fullName variable value.
// Surround the fullName value with <strong> tags.
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Use the textContent property to set the value of the element to the value of the variable currentYear.
yearElement.textContent = currentYear;

// Use the setAttribute method to set the src property of the image element and set its value to the file path variable.
imageElement.setAttribute("src", profilePicture);

// Use the setAttribute method to set the alt property of the image element and set its value to equal 'Profile image of [Insert Name Variable]'.
// Always use a template literal to create the string.
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

// Step 5: Arrays

// Declare an array variable to hold your favorite foods.
let favoriteFoods = ["Pizza", "Sushi", "Chocolate", "Ice Cream"];

// Modify the HTML element with the id of food to display your favorite foods array.
foodElement.textContent = favoriteFoods.join(", "); // Displaying as a comma-separated list

// Declare and instantiate a variable to hold another single favorite food item.
let newFavoriteFood = "Burgers";

// Add the value stored in this new variable to your favorite food array.
favoriteFoods.push(newFavoriteFood);

// Append the new array values onto the displayed content of the HTML element with the id of food.
foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;

// Remove the first element in the favorite food array.
favoriteFoods.shift();

// Append the array output showing the modified array, using a line break.
foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;

// Remove the last element in the favorite food array.
favoriteFoods.pop();

// Append the array output with this final modified favorite foods array.
foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;

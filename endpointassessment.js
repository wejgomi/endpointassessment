// Assign an event to the element submit
var event1 = document.getElementById("submit");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', assess, false);

// Create a function which gathers the value of forms age and height and weight and check for any exceptions, then display result
function assess() {
    // Create the variables for age, weight and height, and an array to store the result
    var result = [];
    var age = parseInt(document.getElementById("age").value);
    var weight = parseInt(document.getElementById("weight").value);
    var height = parseInt(document.getElementById("height").value);

    // Check if the age, weight and height values are within the specified ranges and push the response into result array
    if (age < 26) {result.push("Participant must be over the age of 26!")}
    if (weight < 50 || weight > 90) {result.push("Participant does not meet the weight criteria !")}
    if (height < 150 || height > 190) {result.push("Participant does not meet the height criteria !")}
    if (!age || age > 100 || !weight || weight > 200 || !height || height > 240) {result.length = 0; result.push("Please enter relevant values !")}
    else if ((height > 150 && height < 190) && (age > 26) && (weight > 50 && weight < 90)){result.push("All seems fine !")}
    // Display the result on screen
    document.getElementById("results").innerHTML = result.join("<br />");
}
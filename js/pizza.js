// Function to handle ordering of pizza
function order() {
    // Retrieving values from HTML elements
    var crust = document.getElementById('crust').value; // Crust type
    var cheese = document.getElementById('cheese').value; // Cheese type
    var sauce = document.getElementById('sauce').value; // Sauce type
    var size = document.querySelector('input[name="size"]:checked').value; // Size of the pizza
    var toppings = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(el => el.value); // Toppings selected

    // Creating a new Pizza object
    var pizza = new Pizza(crust, cheese, sauce, size, toppings);

    // Displaying the description of the pizza
    document.getElementById('pizzaDescription').innerText = pizza.describe();
}

// Class to represent a Pizza object
class Pizza {
    // Constructor to initialize Pizza object
    constructor(crust, cheese, sauce, size, toppings) {
        this.crust = crust; // Crust type
        this.cheese = cheese; // Cheese type
        this.sauce = sauce; // Sauce type
        this.size = size; // Size of the pizza
        this.toppings = toppings; // Array of toppings
    }

    // Method to generate description of the pizza
    describe() {
        return `You ordered a ${this.size} pizza with a ${this.crust} crust, ${this.cheese} cheese, and ${this.sauce} sauce. Your toppings are: ${this.toppings.join(', ')}.`;
    }
}
function getStudentID(){
    var studentID = "1217030";
    document.getElementById('StudentID').innerText = studentID;
}
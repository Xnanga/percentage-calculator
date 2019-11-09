
// Processes the form calculations.
let controller = {

    // Declares variables for both incoming arguments.
    processForm1Input: function(valueOne, valueTwo) {

    // Declares variables for both incoming arguments.
    let x = valueOne;
    let y = valueTwo;

    // Tests if either of the form submissions are valid numbers or not.
    if (isNaN(x) || isNaN(y)) {

        // Display an error message to the user.
        alert("Please enter valid numerical values in both fields.");

    } else {

        // Sends the output value to the displayForm2Output method in the view object.
        view.displayForm1Output((y / 100) * x);

    }

},

    // Declares variables for both incoming arguments.
    processForm2Input: function(valueOne, valueTwo) {

    // Declares variables for both incoming arguments.
    let x = valueOne;
    let y = valueTwo;

    // Tests if either of the form submissions are valid numbers or not.
    if (isNaN(x) || isNaN(y)) {

        // Display an error message to the user.
        alert("Please enter valid numerical values in both fields.");

    } else {

        // Sends the output value to the displayForm2Output method in the view object.
        view.displayForm2Output(((x / y) * 100) + "%");

        }

    },

    // Calculates both inputs in form 3 to get an output.
    processForm3Input: function(valueOne, valueTwo) {

        // Declares variables for both incoming arguments.
        let x = valueOne;
        let y = valueTwo;

        // Tests if either of the form submissions are valid numbers or not.
        if (isNaN(x) || isNaN(y)) {
    
            // Display an error message to the user.
            alert("Please enter valid numerical values in both fields.");
    
        } else {
    
            // Sends the output value to the displayForm3Output method in the view object.
            view.displayForm3Output((((y - x) / x) * 100) + "%");
    
        }

    }

};

// Handles what appears on the page after submitting inputs.
let view = {

    // Handles displaying the output of form one after a submission.
    displayForm1Output: function(answer) {

        // Declares a variable for the output field of form one.
        let returnedAnswer = document.getElementById("whatIsPercentOfFormOutput");

        // Changes the value of the output form field to the calculated answer.
        returnedAnswer.value = answer;

    },

    // Handles displaying the output of form two after a submission.
    displayForm2Output: function(answer) {

        // Declares a variable for the output field of form two.
        let returnedAnswer = document.getElementById("xIsWhatPercentOfYFormOutput");

        // Changes the value of the output form field to the calculated answer.
        returnedAnswer.value = answer;

    },

    // Handles displaying the output of form three after a submission.
    displayForm3Output: function(answer) {

        // Declares a variable for the output field of form three.
        let returnedAnswer = document.getElementById("percentIncreaseDecreaseFormOutput");

        // Changes the value of the output form field to the calculated answer.
        returnedAnswer.value = answer;

    }
};

// Handles what should be initialised after the page is finished loading.
function init() {

    // Declare variable for form1 submit button and allow function to handle what happens on click.
    let form1SubmitButton = document.getElementById("whatIsPercentOfFormSubmitButton");
    form1SubmitButton.onclick = handleForm1SubmitButton;

    // Declare variable for form2 submit button and allow function to handle what happens on click.
    let form2SubmitButton = document.getElementById("xIsWhatPercentOfYFormSubmitButton");
    form2SubmitButton.onclick = handleForm2SubmitButton;

    // Declare variable for form3 submit button and allow function to handle what happens on click.
    let form3SubmitButton = document.getElementById("percentIncreaseDecreaseFormSubmitButton");
    form3SubmitButton.onclick = handleForm3SubmitButton;

};

// Function to take the inputs from form one and pass them on to be processed.
function handleForm1SubmitButton() {

    // Declares variables for both of the input fields in form one.
    let form1InputOne = document.getElementById("whatIsPercentOfFormInputOne");
    let form1InputTwo = document.getElementById("whatIsPercentOfFormInputTwo");

    // Declares variables for the actual values of the input fields.
    let firstValue = form1InputOne.value;
    let secondValue = form1InputTwo.value;

    // Send both form field values to the controller object for calculation.
    controller.processForm1Input(firstValue, secondValue);    

};

// Function to take the inputs from form two and pass them on to be processed.
function handleForm2SubmitButton() {

    // Declares variables for both of the input fields in form two.
    let form2InputOne = document.getElementById("xIsWhatPercentOfYFormInputOne");
    let form2InputTwo = document.getElementById("xIsWhatPercentOfYFormInputTwo");

    // Declares variables for the actual values of the input fields.
    let firstValue = form2InputOne.value;
    let secondValue = form2InputTwo.value;

    // Send both form field values to the controller object for calculation.
    controller.processForm2Input(firstValue, secondValue);

};

// Function to take the inputs from form three and pass them on to be processed.
function handleForm3SubmitButton() {

    // Declares variables for both of the input fields in form two.
    let form3InputOne = document.getElementById("percentIncreaseDecreaseFormInputOne");
    let form3InputTwo = document.getElementById("percentIncreaseDecreaseFormInputTwo");

    // Declares variables for the actual values of the input fields.
    let firstValue = form3InputOne.value;
    let secondValue = form3InputTwo.value;

    // Send both form field values to the controller object for calculation.
    controller.processForm3Input(firstValue, secondValue);

};

// Ensures the init function runs after the page has finished loading.
window.onload = init;

// Processes the form calculations.
let controller = {

    // Calculates both inputs in form 2 to get an output.
    processForm2Input: function(valueOne, valueTwo) {

    let x = valueOne;
    let y = valueTwo;

        if (1 === 1) {

            // Sends the output value to the displayForm2Output method in the view object.
            view.displayForm2Output(((x / y) * 100) + "%");
        }
    }

};

// Handles what appears on the page after submitting inputs.
let view = {

    // Handles displaying the output of form 2 after a submission.
    displayForm2Output: function(answer) {

        // The code below does change the output form field to the correct answer but only in the HTML - find a way to get this to appear on the DOM.
        let returnedAnswer = document.getElementById("xIsWhatPercentOfYFormOutput");

        returnedAnswer.textContent = answer;
        returnedAnswer.value = answer;

        console.log(answer);
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

    console.log("Form One Submit Button Was Clicked.");

};

// Function to take the inputs from form two and pass them on to be processed.
function handleForm2SubmitButton() {

    console.log("Form Two Submit Button Was Clicked.");

    let form2InputOne = document.getElementById("xIsWhatPercentOfYFormInputOne");
    let form2InputTwo = document.getElementById("xIsWhatPercentOfYFormInputTwo");

    let firstValue = form2InputOne.value;
    let secondValue = form2InputTwo.value;

    controller.processForm2Input(firstValue, secondValue);

};

// Function to take the inputs from form three and pass them on to be processed.
function handleForm3SubmitButton() {

    console.log("Form Three Submit Button Was Clicked.");

};

// Ensures the init function runs after the page has finished loading.
window.onload = init;

// Get references to the input fields and the submit button
const field1Input = document.getElementById('ucs-input');
const field2Input = document.getElementById("hgb-input");
const field3Input = document.getElementById("cci-input");
const submitButton = document.getElementById("submitButton");

// Add event listeners to the input fields to check for changes
//field1Input.addEventListener('input', checkFieldsAndEnableButton);
field2Input.addEventListener('input', validateHGB);
//field2Input.addEventListener('input', checkFieldsAndEnableButton);
//field3Input.addEventListener('input', checkFieldsAndEnableButton);

function validateHGB() {
    const field2Input = document.getElementById("hgb-input");
    const value = field2Input.value.trim()
    field2Input.value = field2Input.value.replace(/[^0-9]/g, "");

    

    console.log(value);
}

// Function to check if all input fields have values and enable the button
function checkFieldsAndEnableButton() {
    const field1Value = field1Input.value.trim();
    const field2Value = field2Input.value.trim();
    const field3Value = field3Input.value.trim();

    // Enable the button only if all fields have values
    if (field1Value !== '' && field2Value !== '' && field3Value !== '') {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', true);
    }
}

const field1Input = document.getElementById('ucs-input');
const field2Input = document.getElementById("hgb-input");
const field3Input = document.getElementById("cci-input");
const submitButton = document.getElementById("submitButton");

field2Input.addEventListener('focusout', validateHGB);
field3Input.addEventListener('focusout', validateCCI);
field1Input.addEventListener('input', checkFieldsAndEnableButton);
field2Input.addEventListener('input', checkFieldsAndEnableButton);
field3Input.addEventListener('input', checkFieldsAndEnableButton);

function validateHGB() {
    const fieldInput = document.getElementById("hgb-input");
    const fieldInputLabelError = document.getElementById("hgb-error-label");
    const value = fieldInput.value.trim()

    if (value < 5 || value > 20) {
        fieldInputLabelError.textContent = " - Niewłaściwa wartość";
        console.log("error!!!!");
    }
    else fieldInputLabelError.textContent = "";   

    checkFieldsAndEnableButton();
    console.log(value);
}

function validateCCI() {
    const fieldInput = document.getElementById("cci-input");
    const fieldInputLabelError = document.getElementById("cci-error-label");
    const value = fieldInput.value.trim()

    if (value < 1 || value > 37) {
        fieldInputLabelError.textContent = " - Niewłaściwa wartość";
    }
    else fieldInputLabelError.textContent = "";   

    checkFieldsAndEnableButton();
}

function checkFieldsAndEnableButton() {
    const field1Value = field1Input.value.trim();
    const field2Value = field2Input.value.trim();
    const field3Value = field3Input.value.trim();
    const field2InputLabelText = document.getElementById("cci-error-label").textContent;
    const field3InputLabelText = document.getElementById("hgb-error-label").textContent;

    if (field1Value !== '' && field2Value !== '' && field3Value !== ''
        && field2InputLabelText == '' && field3InputLabelText == '') {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', true);
    }
}

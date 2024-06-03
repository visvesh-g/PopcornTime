// Selecting the radio buttons and submit button
const signupRadio1 = document.querySelector('#signup');
const loginRadio1 = document.querySelector('#login');
const submitButton = document.querySelector('.form-inner .field.btn input');

// Function to change the button text based on the selected radio button
function updateButtonText() {
    if (signupRadio1.checked) {
        submitButton.value = 'SignUp';
    } else if (loginRadio1.checked) {
        submitButton.value = 'Login';
    }
}

// Adding event listeners to radio buttons to trigger the button text change
signupRadio1.addEventListener('click', updateButtonText);
loginRadio1.addEventListener('click', updateButtonText);

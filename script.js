const submitButton = document.querySelector('#submit-button');
const passBtn = document.querySelector('#pass-btn');
const confirmPassBtn = document.querySelector('#confirm-pass-btn');
const passwordField = document.querySelector('.password-field');
let passErrorMessage = true;


function checkIfPasswordIsEqual(password1, password2) {
    return password1 == password2;
}


submitButton.addEventListener('click', (e) => {
    if(!(checkIfPasswordIsEqual(passBtn.value, confirmPassBtn.value))) {
        if(!(passErrorMessage)) { 
            e.preventDefault();
            return;
         }
        passBtn.style.border = "1px solid red";
        confirmPassBtn.style.border = "1px solid red";

        let errorMessage = document.createElement('p');
        errorMessage.innerHTML = "* Passwords do not match";
        errorMessage.style.color = "red";
        errorMessage.style.fontSize = "10px";
        errorMessage.style.marginTop = "5px";
        passwordField.appendChild(errorMessage);
        passErrorMessage = false;
        e.preventDefault();

    }
})

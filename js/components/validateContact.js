const form = document.querySelector("#form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const formSuccess = document.querySelector("#formSuccess");
const contactButton = document.querySelector(".btn-submit");

export function validateContact() {

    function validateName() {
        if (checkLength(name.value, 1) === true) {
            name.style.borderBottom = "4px solid green";
            nameError.style.display = "none";
        } else if (name.value === '') {
            name.style.border = "1px solid grey";
            nameError.style.display = "none";
        } else {
            name.style.borderBottom = "4px solid red";
            nameError.style.display = "block";
        }
    }

    function validateNameInput() {
        if (checkLength(name.value, 1) === true) {
            name.style.borderBottom = "4px solid green";
            nameError.style.display = "none";
        } else if (name.value === '') {
            name.style.border = "1px solid grey";
            nameError.style.display = "none";
        } else {
            name.style.borderBottom = "4px solid red";
        }
    }

    function validateEmail() {

        if (checkEmail(email.value) === true) {
            email.style.borderBottom = "4px solid green";
            emailError.style.display = "none";
        } else if (email.value === '') {
            email.style.border = "1px solid grey";
            emailError.style.display = "none";
        } else {
            email.style.borderBottom = "4px solid red";
            emailError.style.display = "block";
        }
    }

    function validateEmailInput() {

        if (checkEmail(email.value) === true) {
            email.style.borderBottom = "4px solid green";
            emailError.style.display = "none";
        } else if (email.value === '') {
            email.style.border = "1px solid grey";
            emailError.style.display = "none";
        } else {
            email.style.borderBottom = "4px solid red";
        }
    }

    function validateMessage() {
        if (checkLength(message.value, 9) === true) {
            message.style.borderBottom = "4px solid green";
            messageError.style.display = "none";
        } else if (message.value <= 9) {
            message.style.border = "1px solid grey";
            messageError.style.display = "none";
        } else {
            message.style.borderBottom = "4px solid red";
            messageError.style.display = "block";
        }
    }

    function validateMessageInput() {
        if (checkLength(message.value, 9) === true) {
            message.style.borderBottom = "4px solid green";
            messageError.style.display = "none";
        } else if (message.value <= 9) {
            message.style.border = "1px solid grey";
            messageError.style.display = "none";
        } else {
            message.style.borderBottom = "4px solid red";
        }
    }

    function buttonEnable() {
        if (checkLength(name.value, 1) === true && checkEmail(email.value) === true &&
        checkLength(message.value, 9) === true) {
            contactButton.style.opacity = 1;
            contactButton.disabled = false;
        } else {
            contactButton.style.opacity = .4;
            contactButton.disabled = true;
        }
    }

    function validateForm(event) {

        if (checkLength(name.value, 1) === true && checkEmail(email.value) === true &&
        checkLength(message.value, 9) === true) {
            // formSuccess.style.display = "block";
            name.style.border = "1px solid var(--grey)";
            email.style.border = "1px solid var(--grey)";
            message.style.border = "1px solid var(--grey)";
        } else {
            event.preventDefault();
            // formSuccess.style.display = "none";
        }
        //this will hide success message after 7 seconds
        // setInterval(function () {
        //     formSuccess.style.display = "none";
        // }, 7000)

    }

    name.addEventListener("blur", validateName);
    name.addEventListener("input", validateNameInput);
    email.addEventListener("blur", validateEmail);
    email.addEventListener("input", validateEmailInput);
    message.addEventListener("blur", validateMessage);
    message.addEventListener("input", validateMessageInput);
    form.addEventListener("submit", validateForm);
    form.addEventListener("input", buttonEnable);

    window.addEventListener("pageshow", () => {
        form.reset();
    });

}

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


const refsInput = document.querySelector('#validation-input')

refsInput.addEventListener('blur', validationInputValue)

function validationInputValue() {
    if (refsInput.value.length === Number(refsInput.dataset.length)) {
        refsInput.classList.remove("invalid");
        refsInput.classList.add('valid')
    }
    else {
        refsInput.classList.remove("valid");
        refsInput.classList.add('invalid')

   }
}
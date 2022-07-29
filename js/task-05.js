const refs = {
    userName: document.querySelector('#name-output'),
    inputName: document.querySelector('#name-input'),
}

refs.inputName.addEventListener('input', (event) => {
    refs.userName.textContent = event.currentTarget.value
})


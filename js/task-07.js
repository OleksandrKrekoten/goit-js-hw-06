const inputFontSizeControl = document.querySelector('#font-size-control')
const textFontSizeControl = document.querySelector('#text')

inputFontSizeControl.addEventListener('input',() => {
    textFontSizeControl.style.fontSize = `${inputFontSizeControl.value}px`
    })


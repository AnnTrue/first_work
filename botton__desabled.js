"use strict"

// получение элемента из html:
let button = document.querySelector(".form__button")
let checkbox = document.querySelector(".form__checkbox")

if(checkbox.checked) {
    button.classList.remove("button__disabled")
} else {
    button.classList.add("button__disabled")
}

checkbox.onclick = function disableButton() {

    if(checkbox.checked) {
        button.classList.remove("button__disabled")
    } else {
        button.classList.add("button__disabled")
    }
}

// добавление нового класса:
button.classList.add("button__disabled")
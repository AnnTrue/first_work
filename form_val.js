"use strict";

let button = document.querySelector(".form__button");
let checkbox = document.querySelector(".form__checkbox");

button.classList.add("button__disabled");
button.setAttribute("disabled", true);

checkbox.onclick = function disableButton() {
  if (checkbox.checked) {
    button.classList.remove("button__disabled");
    button.removeAttribute("disabled");
  } else {
    button.classList.add("button__disabled");
    button.setAttribute("disabled", true);
  }
};

button.addEventListener("click", (event) => {
  function isEmailValid(value) {
    const EMAIL_REGEXP =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return EMAIL_REGEXP.test(value);
  }

  let name = document.querySelector(".form__name").value;
  let email = document.querySelector(".form__email").value;
  let message = document.querySelector(".form__message").value;

  function isMessageValid(value) {
    if (message.length > 100) {
      return false;
    }
    if (message.length === 0) {
      return true;
    } else {
      const cyrillicPattern = /^\p{Script=Cyrillic}+$/u;
      return cyrillicPattern.test(value);
    }
  }

  function isNameValid(value) {
    const cyrillicPattern = /^\p{Script=Cyrillic}+$/u;
    return cyrillicPattern.test(value);
  }

  if (
    name.length &&
    isEmailValid(email) &&
    isMessageValid(message) &&
    email.length &&
    isNameValid(name)
  ) {
    button.classList.remove("button__disabled");
    button.removeAttribute("disabled");
  } else {
    button.classList.add("button__disabled");
    button.setAttribute("disabled", true);

    checkbox.checked = false;

    if (!name.length || !email.length) {
      let div = document.createElement("div");
      div.className = "alert";
      div.innerHTML = "<strong>Внимание!</strong> Вы не ввели имя или email.";
      
      document.body.append(div);
    }

    if (!isEmailValid(email) && email.length) {
      let div = document.createElement("div");
      div.className = "alert";
      div.innerHTML = "<strong>Внимание!</strong> Вы ввели email неверно.";

      document.body.append(div);
    }

    if (!isNameValid(name) && name.length) {
      let div = document.createElement("div");
      div.className = "alert";
      div.innerHTML =
        "<strong>Внимание!</strong> Вы ввели имя неверно, используйте только русские буквы.";

      document.body.append(div);
    }

    let time = setTimeout(() => {
      let modal = document.querySelector(".alert");
      modal.remove();
    }, 5000);

    div.addEventListener("mouseover", () => {
      clearTimeout(time);
    });

    div.addEventListener("mouseout", () => {
      time = setTimeout(() => {
        let modal = document.querySelector(".alert");
        modal.remove();
      }, 5000);
    });
  }
});

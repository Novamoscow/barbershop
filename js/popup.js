var login = document.querySelector(".login");
var popup = document.querySelector(".login-form");
var form = popup.querySelector("form");
var loginFocus = popup.querySelector("[name=login]");
var passwordFocus = popup.querySelector("[name=password]");
var storage = localStorage.getItem("loginFocus");
var loginForm__close = popup.querySelector(".login-form__close");


login.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.classList.toggle("login-form_show");

    if (storage) {
        loginFocus.value = storage;
        passwordFocus.focus();
    } else {
        loginFocus.focus();
    }
});

loginForm__close.addEventListener("click", function (close) {
    popup.classList.remove("login-form_show");
});


form = addEventListener("submit", function (focusStart) {
    if (!loginFocus.value || !passwordFocus.value) {
        focusStart.preventDefault();
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("loginFocus", loginFocus.value)
    }
});

window.addEventListener("keydown", function (closeForm) {
    if (closeForm.keyCode === 27) {
        if (popup.classList.contains("login-form_show")) {
            popup.classList.remove("login-form_show")
        }
    }
});
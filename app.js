const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const reloadButton = document.getElementById("reload-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginGrantedMsg = document.getElementById("login-granted-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
	const keycode = loginForm.keycode.value;

    if (username === "selahattin" && password === "umbrella" && keycode === "7798") {
        window.location.href="access_granted.html";
    } else {
        loginGrantedMsg.style.opacity = 0;
		loginErrorMsg.style.opacity = 1;
    }
})

reloadButton.addEventListener("click", (e) => {
	e.preventDefault();
	window.location.reload();
	
})
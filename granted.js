const grantedForm = document.getElementById("granted-form");
const getButton = document.getElementById("granted-form-submit");
const reloadButton = document.getElementById("reload-submit");
const goMainButton = document.getElementById("back-to-main-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginGrantedMsg = document.getElementById("login-granted-msg");

getButton.addEventListener("click", (e) => {
    e.preventDefault();
    const projectCode = grantedForm.projectCode.value;
    const fileCode = grantedForm.fileCode.value;
	const aboutCode = grantedForm.aboutCode.value;

    if (projectCode === "1") {
        window.location.href="projects.html";
    } else if (fileCode === "2") {
		alert("FILE AREA ACCESS GRANTED");
	} else if (aboutCode === "0110") {
		alert("ABOUT AREA ACCESS GRANTED");
	} else {
        loginGrantedMsg.style.opacity = 0;
		loginErrorMsg.style.opacity = 1;
    }
})

reloadButton.addEventListener("click", (e) => {
	e.preventDefault();
	window.location.reload();
	
})

goMainButton.addEventListener("click", (e) => {
	e.preventDefault();
	window.location.href="index.html";
})
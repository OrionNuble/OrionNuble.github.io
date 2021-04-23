const xprizeCarbonButton = document.getElementById("projectCarbonRemoval");
const createProjectButton = document.getElementById("createProject");
const getToTheGrantedPageButton = document.getElementById("backToGranted");


xprizeCarbonButton.addEventListener("click", (e) => {
    e.preventDefault();
	
	window.location.href="xprizeCarbonRemoval.html";
    
})

createProjectButton.addEventListener("click", (e) => {
	e.preventDefault();
	
	window.location.href="newProject.html";
})

getToTheGrantedPageButton.addEventListener("click", (e) => {
	e.preventDefault();
	
	window.location.href="access_granted.html";
})
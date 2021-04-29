const aboutThisProjectButton = document.getElementById("aboutThisProject");
const calculatr = document.getElementById("calc");
const getToTheProjectsPageButton = document.getElementById("backToProjects");


aboutThisProjectButton.addEventListener("click", (e) => {
    e.preventDefault();
	alert("More on that Later");
	/*
	window.location.href="xprizeCarbonRemoval.html";
	*/
})

getToTheProjectsPageButton.addEventListener("click", (e) => {
	e.preventDefault();
	
	window.location.href="projects.html";
})

calc.addEventListener("click", (e) => {
	e.prevenDefault();
	
	window.location.href="calculator.html";
}

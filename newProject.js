const newProjectsForm = document.getElementById("newProjectsForm");
const saveButton = document.getElementById("save-form-submit");
const reloadButton = document.getElementById("reload-submit");
const getToTheProjectsPageButton = document.getElementById("backToProjects");

saveButton.addEventListener("click", (e) => {
	e.preventDefault();
	
	const projectName = newProjectsForm.projectName.value;
	const projectCode = newProjectsForm.projectCode.value;
	const projectAdmin = newProjectsForm.projectAdmin.value;
	/* save those above */
	alert("Saved! - (ish)");
})

reloadButton.addEventListener("click", (e) => {
	e.preventDefault();
	
	window.location.reload();
})

getToTheProjectsPageButton.addEventListener("click", (e) => {
	e.preventDefault();
	
	window.location.href="projects.html";
})
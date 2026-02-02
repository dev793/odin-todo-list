const mainContent = document.querySelector("#main-content");

function renderProject(project) {
    console.log("Hello from the DOMController!")
        
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");

    const projectName = document.createElement("div");
    projectName.textContent = project;

    projectContainer.appendChild(projectName);
    mainContent.appendChild(projectContainer);
}

function renderTask(task, projectId) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");
    taskCard.textContent = task.title; //make this not leaky
    mainContent.append(taskCard); //think of a way to append to project container, will need to pass in a reference somehow, then .querySelector it?
}

export { renderProject, renderTask }
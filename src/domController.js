const mainContent = document.querySelector("#main-content");

function renderProject(projectName, projectID) {
       
    const projectContainer = document.createElement("div");
    const projectNameElement = document.createElement("div");

    projectContainer.classList.add("project-container");
    projectContainer.dataset.projectId = projectID;

    projectNameElement.textContent = projectName;

    projectContainer.appendChild(projectNameElement);
    mainContent.appendChild(projectContainer);
}

function renderTask(taskTitle, projectID) {
    const taskCard = document.createElement("div");
    const projectElement = document.querySelector(`[data-project-id="${projectID}"]`);

    taskCard.classList.add("task-card");
    taskCard.textContent = taskTitle;
    
    projectElement.append(taskCard);
}

export { renderProject, renderTask }
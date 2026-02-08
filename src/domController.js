const mainContent = document.querySelector("#main-content");
const taskDialog = document.querySelector("#task-dialog");
const addTaskForm = document.querySelector("form") //could do taskDialog.querySelector... to make it more specific
const addTaskBtn = document.querySelector("#add-task");
const cancelBtn = document.querySelector("#cancel");

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

function bindEvents(handleClose) {
    
    addTaskBtn.addEventListener("click", () => {
        taskDialog.showModal();
    });

    taskDialog.addEventListener("close", handleClose);
}

function getTaskFormData() {
    return new FormData(addTaskForm);
}

function clearForm() {
    addTaskForm.reset();
}

export { renderProject, renderTask, bindEvents, getTaskFormData, clearForm }
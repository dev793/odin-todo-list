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

function removeTaskElement(taskID) {
    const taskCard = document.querySelector(`[data-task-id="${taskID}"]`);
    taskCard.remove();
}

//perhaps split out the button creation into it's own function?
function renderTask(taskTitle, taskID, projectID, onDelete) {
    const taskCard = document.createElement("div");
    const projectElement = document.querySelector(`[data-project-id="${projectID}"]`);

    taskCard.classList.add("task-card");
    taskCard.textContent = taskTitle;
    taskCard.dataset.taskId = taskID;
    taskCard.dataset.projectId = projectID;

    //TODO: Create checkbox element too, place left of title
    const btnContainer = document.createElement("div");
    const viewBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    viewBtn.textContent = "View";
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    viewBtn.addEventListener("click", () => {
        return;
    })

    editBtn.addEventListener("click", () => {
        return;
    })

    deleteBtn.addEventListener("click", () => {
        onDelete(taskID, projectID);
    });

    btnContainer.append(viewBtn);
    btnContainer.append(editBtn);
    btnContainer.append(deleteBtn);

    taskCard.append(btnContainer);

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

export { renderProject, renderTask, bindEvents, getTaskFormData, clearForm, removeTaskElement }
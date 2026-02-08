import "./styles.css";
import { Task } from "./task.js";
import { Project } from "./project.js";
import { renderProject, renderTask, bindEvents, getTaskFormData, clearForm } from "./domController.js";

const projectsList = []

const project1 = new Project("Project 1");
const project2 = new Project("Project 2");

let currentProject = project1;

projectsList.push(project1);
projectsList.push(project2);

console.log(projectsList);
console.log(project1);


function createTask(taskParams, project) {
    const task = new Task(taskParams);
    project.addTask(task);
    renderTask(task.getTitle(), project.getID());

    console.log(task);
}

//need to make cancel button close modal when
function handleClose(e) {
    if (this.returnValue !== "add") {
        clearForm();
        return;
    }

    const formObject = Object.fromEntries(getTaskFormData().entries());

    createTask(formObject, currentProject);
    clearForm();
}

projectsList.forEach(project => {
    renderProject(project.getName(), project.getID());

    project.getTasks().forEach(task => {
        renderTask(task.getTitle(), project.getID());
    })
})

createTask({title: "Buy Groceries"}, project1);
createTask({title: "Walk Dog"}, project1)

console.log(project1)
console.log(project1.taskList)


bindEvents(handleClose);


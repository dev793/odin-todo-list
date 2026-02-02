import "./styles.css";
import { Task } from "./task.js";
import { Project } from "./project.js";
import { renderProject, renderTask } from "./domController.js";

const projectsList = []

const project1 = new Project("Project 1");
const project2 = new Project("Project 2")

projectsList.push(project1);
projectsList.push(project2);

console.log(projectsList);
console.log(project1);

// change the arguments to a task creation param object, and then project?
function createTask(title, project) {
    const task = new Task(title);
    project.addTask(task);

    console.log(task);

}

createTask("Buy Groceries", project1);
createTask("Walk Dog", project1)

console.log(project1)
console.log(project1.taskList)

//renderProjects(projectsList.map(p => p.getName()));

projectsList.forEach(project => {
    renderProject(project.getName());

    project.getTasks().forEach(task => {
        renderTask(task);
    })
    //for each task in project, renderTask
})
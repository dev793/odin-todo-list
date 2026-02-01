import "./styles.css";
import { Task } from "./task.js";
import { Project } from "./project.js";

const myProject = new Project("My Project");

console.log(myProject);

function createTask(title) {
    const task = new Task(title);
    console.log(task);
}

createTask("Buy Groceries");


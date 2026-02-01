import "./styles.css";
import { Task } from "./task.js";
import { Project } from "./project.js";

const myProject = new Project("My Project");

console.log(myProject);


// change the arguments to a task creation param object, and then project?
function createTask(title, project) {
    const task = new Task(title);
    project.addTask(task);

    console.log(task);

}

createTask("Buy Groceries", myProject);
createTask("Walk Dog", myProject)

console.log(myProject)
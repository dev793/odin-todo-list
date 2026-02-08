class Project {

    constructor(name) {
        this.id = crypto.randomUUID();
        this.taskList = [];

        this.name = name;
    }

    addTask(task) {
        this.taskList.push(task);
    }

    //Do I need to import Task into this module??
    removeTask(taskID) {
        this.taskList = this.taskList.filter(
            task => task.getID() !== taskID
        );
    }

    getName() {
        return this.name;
    }

    getTasks() {
        return this.taskList;
    }

    getID() {
        return this.id;
    }
}

export { Project };
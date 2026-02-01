class Project {

    constructor(name) {
        this.id = crypto.randomUUID();
        this.taskList = [];

        this.name = name;
    }

    addTask(task) {
        this.taskList.push(task);
    }
}

export { Project };
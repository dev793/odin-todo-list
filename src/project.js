class Project {

    constructor(name) {
        this.id = crypto.randomUUID();
        this.taskList = [];

        this.name = name;
    }

    addTask(task) {
        this.taskList.push(task);
    }

    getName() {
        return this.name;
    }

    getTasks() {
        return this.taskList;
    }
}

export { Project };
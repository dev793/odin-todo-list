class Task {

    //update dueDate default to today's date using date library? Or handle validation on form??
    constructor(title, description = "", dueDate = "", priority = "Medium") {
        this.id = crypto.randomUUID();
        this.isComplete = false;

        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority
    }
}

export { Task };
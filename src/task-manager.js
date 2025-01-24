import { Task } from './task.js';

export class TaskManager {
    constructor() {
        this.tasks = [];
        this.element = document.getElementById('taskList');
    }

    add(task) {
        this.tasks.push(task);
        this.element.appendChild(task.element);
    }

    onRemoveTask(task) {
        this.tasks = this.tasks.filter(t => t !== task);
        this.element.removeChild(task.element);
    }

    save() {
        const data = this.tasks.map(task => ({
            description: task.description,
            isDone: task.isDone
        }));
        localStorage.setItem('tasks', JSON.stringify(data));
    }

    load() {
        const savedData = JSON.parse(localStorage.getItem('tasks')) || [];
        savedData.forEach(data => {
            const task = new Task(data.description, this.onRemoveTask.bind(this));
            task.isDone = data.isDone;
            if (data.isDone) task.toggle();
            this.add(task);
        });
    }
}

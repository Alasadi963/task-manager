import { TaskManager } from './task-manager.js';
import { Task } from './task.js';

const taskManager = new TaskManager();
taskManager.load();

const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');

form.addEventListener('submit', event => {
    event.preventDefault();
    const task = new Task(input.value, taskManager.onRemoveTask.bind(taskManager));
    taskManager.add(task);
    taskManager.save();
    input.value = ''; // Rensa input
});

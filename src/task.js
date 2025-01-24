export class Task {
    constructor(description, onRemove) {
        this.description = description;
        this.isDone = false;
        this.element = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = this.description;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Radera';
        deleteButton.addEventListener('click', () => onRemove(this));

        this.element.appendChild(span);
        this.element.appendChild(deleteButton);

        span.addEventListener('click', () => this.toggle());
    }

    toggle() {
        this.isDone = !this.isDone;
        this.element.querySelector('span').style.textDecoration = this.isDone ? 'line-through' : 'none';
    }
}

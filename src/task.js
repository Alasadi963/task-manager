export class Task {
    constructor(description, onRemove) {
        this.description = description;
        this.isDone = false;
        this.element = document.createElement('li');

        // Skapa <span> för uppgiftstext
        const span = document.createElement('span');
        span.textContent = this.description;

        // Skapa knapp för att radera
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Radera';
        deleteButton.addEventListener('click', () => onRemove(this));

        // Lägg till i <li>-elementet
        this.element.appendChild(span);
        this.element.appendChild(deleteButton);

        // Klicka för att toggla status
        span.addEventListener('click', () => this.toggle());
    }

    toggle() {
        this.isDone = !this.isDone;
        this.element.querySelector('span').style.textDecoration = this.isDone ? 'line-through' : 'none';
    }
}

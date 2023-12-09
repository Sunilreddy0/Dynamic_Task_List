const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const label = document.createElement('label');
    label.textContent = taskText;
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';

    checkbox.addEventListener('change', () => {
      label.classList.toggle('completed', checkbox.checked);
    });

    deleteButton.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
  }
});
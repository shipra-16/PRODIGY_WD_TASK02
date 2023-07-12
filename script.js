// Get HTML elements
const taskInput = document.getElementById('task-input');
const createBtn = document.getElementById('create-btn');
const taskList = document.getElementById('task-list');

// Create task
function createTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskTextElem = document.createElement('span');
    taskTextElem.className = 'task-text';
    taskTextElem.textContent = taskText;
    taskItem.appendChild(taskTextElem);

    const taskActions = document.createElement('span');
    taskActions.className = 'task-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', editTask);
    taskActions.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteTask);
    taskActions.appendChild(deleteBtn);

    taskItem.appendChild(taskActions);
    taskList.appendChild(taskItem);

    taskInput.value = '';
  }
}

// Edit task
function editTask(event) {
  const taskItem = event.target.parentNode.parentNode;
  const taskTextElem = taskItem.querySelector('.task-text');
  const taskText = taskTextElem.textContent;

  const newTaskText = prompt('Edit task:', taskText);

  if (newTaskText !== null && newTaskText.trim() !== '') {
    taskTextElem.textContent = newTaskText;
  }
}

// Delete task
function deleteTask(event) {
  const taskItem = event.target.parentNode.parentNode;
  taskList.removeChild(taskItem);
}

// Add event listener to create button
createBtn.addEventListener('click', createTask);

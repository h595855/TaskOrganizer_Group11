import TaskList from './js/TaskList.js'
customElements.define('task-list', TaskList);

import TaskBox from './js/TaskBox.js'
customElements.define('task-box', TaskBox);


const tasklist = document.querySelector("TASK-LIST")
const taskbox = document.querySelector("TASK-BOX");
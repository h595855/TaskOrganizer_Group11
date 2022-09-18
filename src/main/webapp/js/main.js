import TaskList from '../components/tasklist/TaskList.js'
customElements.define('task-list', TaskList);

import TaskBox from '../components/taskbox/TaskBox.js'
customElements.define('task-box', TaskBox);


const tasklist = document.querySelector("TASK-LIST")
const taskbox = document.querySelector("TASK-BOX");
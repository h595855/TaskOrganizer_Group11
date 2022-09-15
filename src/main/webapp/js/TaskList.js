export default class TaskList extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'closed' });
        this.initialView();
    }

    initialView() {
        const tasklist = document.querySelector("TASK-LIST");
        tasklist.shadow.innerHTML = `
        <p>Wating for server data</p>
        <button type="button" disabled>New task</button>`
    }





    enableAddTask() {
        this.shadow.innerHTML = `
        <link rel="stylesheet" href="./CSS/style.css">
        <H1 class="section-header">Tasks</H1>

        <div id="task-count">
            <span id="task-counter">Found taskCount tasks</span>
        </div>

        <button id="newtask-btn" type="button">New task</button>
        
        <table id="tasklist-table">
            <tr id="taskheader-row">
                <th id="taskheader-column">Task</th>
                <th id="taskheader-column">Status</th>
                <th></th>
                <th></th>
            </tr>
            <tr id="task-row">
                <td >Title</td>
                <td >Status</td>
                <td><select> 
                    <option value="" selected disabled hidden>Modify</option>
                    <option value="WAITING">WAITING</option>
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="DONE">DONE</option>
                </select></td>
                <td ><button id="remove-btn" type="button">REMOVE</button></td>
            </tr>

        </table>
        `;
    }

    addtaskCallback(callback) {
        let btn = this.shadow.querySelector("#btn-newtask");
        btn.addEventListener("click", callback);
    }

    changeStatusCallback() {

    }


    deleTaskCallback() {

    }


    noTask() {
            const tasklist = document.querySelector("TASK-LIST");
        tasklist.shadow.innerHTML = `
        <p>No tasks found.</p>
        <button type="button">New task</button>`
    }

    // Adds a new task to the view
    showTask(newTask) {
        let taskTable = this.shadow.querySelector("#tasklist-table");

        let newRow = taskTable.insertRow(1);
        newRow.innerHTML = ` 
            <td>${newTask.title}</td>
            <td>${newTask.status}</td>
            <td><select> 
                <option value="" selected disabled hidden>Modify</option>
                <option value="WAITING">WAITING</option>
                <option value="ACTIVE">ACTIVE</option>
                <option value="DONE">DONE</option>
            </select></td>
            <td ><button id="remove-btn" type="button">REMOVE</button></td>
        `;
    }

    updateTask(status) {
        if (status.id === newtask.id) {
            newtask.status = status.status;
        } else {
            console.log("amogus");
        }

    }

    removeTask(id) {

    }

    setStatuseslist(list) {

    }

}





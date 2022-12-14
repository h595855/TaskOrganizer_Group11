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

        <button type="button" id="newtask-btn">New task</button>
        
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
                <td><select class="option"> 
                </select></td>
                <td ><button id="remove-btn" type="button">REMOVE</button></td>
            </tr>

        </table>
        `;
    }

    addTaskCallback() {
        let newTaskBtn = this.shadow.querySelector("#newtask-btn");

        newTaskBtn.addEventListener('click', function() {
            let event = new CustomEvent('addNewTask', {
                bubbles: true,
                composed: true,
                detail: {
                    value: 'something'
                }
            });
            this.dispatchEvent(event);
            console.log("event was dispatched")
        });
    }

    changeStatusCallback() {

    }


    deletetaskCallback(id) {
        let tableRow = this.shadow.getElementById(id);
        let taskTitle = tableRow.getElementsByTagName("td")[0].textContent;     // Gets the task-title attribute
        
        let answer = window.confirm("Delete task " + taskTitle + "?");
            if(answer){
                this.removeTask(id);
            } 
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
        newRow.id = newTask.id;
        newRow.innerHTML = ` 
            <td id="task-title">${newTask.title}</td>
            <td id="task-status">${newTask.status}</td>
            <td><select class="row-status-options"> 

           

            </select></td>
            <td>
                <button id="remove-btn" type="button">REMOVE</button>
            </td>
        `;
        this.removeBtnListener();
    }


    setStatuseslist(list) {

       let selects = this.shadow.querySelectorAll('select');

        selects.forEach(function(element) {
            let output = '';
            
            list.forEach(function(listEl){
                output += `<option>${listEl}</option>`
            });
            element.innerHTML = output;
        });

    }

    // Adds a listener to a new task
    removeBtnListener(){
        let removeButton = this.shadow.getElementById("remove-btn");
        removeButton.addEventListener("click", (event) => {
            let taskId = event.path[2].getAttribute('id');      // gets the id attribute of the tablerow with the clicked button
            this.deletetaskCallback(taskId);  
        });
    }

    updateTask(status) {
       var row = this.shadow.getElementById(status.id);

       row.deleterow(1);
       row.insertRow(1).status.status;

    }

    removeTask(id) {
        let tableRow = this.shadow.getElementById(id);
        tableRow.parentElement.removeChild(tableRow);
    }


}





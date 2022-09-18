export default class TaskBox extends HTMLElement {
    constructor(){
        super()
        this.shadow = this.attachShadow({mode: 'closed'});
    }

    show() {
        this.shadow.innerHTML= `   
        <!-- Simple modal dialog containing a form -->
        <link rel="stylesheet" href="styleModal.css">
        <dialog id="favDialog">
            <form method="dialog">
                <div id="close-div">
                    <button type="button" id="close-btn">x</button>
                </div>
                <label for="title">Title:</label> 
                <input type="text" id="title">
                <p><label>Status:
                    <select id="status-options">
                        
                    </select>
                </label></p>
                <div>
                    <button id="addTask-btn" value="default">Add task</button>
                </div>
            </form>
        </dialog>
        <output></output>
        `;
        this.openModal();
    }

    openModal() {
        const updateButton = this.shadow.getElementById('updateDetails');
        const favDialog = this.shadow.getElementById('favDialog');
        const outputBox = this.shadow.querySelector('output');
        const selectEl = favDialog.querySelector('select');
        const addTaskBtn = favDialog.querySelector('#addTask-btn');

        favDialog.showModal();

        // // "Update details" button opens the <dialog> modally
        // updateButton.addEventListener('click', () => {
        //     if (typeof favDialog.showModal === "function") {
        //         favDialog.showModal();
        //     } else {
        //         outputBox.value = "Sorry, the <dialog> API is not supported by this browser.";
        //     }
        // });
    }
    
    
    setStatusesList(list) {
        let output = '';
        list.forEach((statusOpt, index) => {
            output += `<option>${statusOpt}</option>`;
        });
        this.shadow.getElementById("status-options").innerHTML = output;
    }

    newtaskCallback(){
        window.addEventListener('addNewTask', (event) => {
            let detail = event.detail.value;
            console.log(detail + " was passed from TaskList.js");
            this.show();
        });
    }
    
    close(){
        const favDialog = this.shadow.getElementById('favDialog');
        favDialog.close();
    }

}

export default class TaskBox extends HTMLElement {
    constructor(){
        super()
        this.shadow = this.attachShadow({mode: 'closed'});
    }

    show() {
        this.shadow.innerHTML= `   
        <!-- Simple modal dialog containing a form -->
        
        <section class="container content-section">
            <H1 class="section-header">Tasks</H1>

            <div class="task-count">
            <span class="task-total-count">Found Count tasks</span>
            </div>

            </section>
        
        <dialog id="favDialog">
           
            <p><label>Title: 
            <input type="text" value="Task title" id="Task">
            </label></p>
            <form method="dialog">
                <p><label>Status:
                    <select>
                        <option value="default">Choose…</option>
                        <option>WAITING</option>
                        <option>ACTIVE</option>
                        <option>DONE</option>
                    </select>
                </label></p>
                <div>
                    <button id="confirmBtn" value="default">Add task</button>
                </div>
            </form>
        </dialog>
            <p>
                <button id="updateDetails">Update details</button>
            </p>
        <output></output>
        `;
        
        //metoder
        this.testModal();
    }

    testModal() {
        const updateButton = this.shadow.querySelector('#updateDetails');
        const favDialog = this.shadow.getElementById('favDialog');
        //const outputBox = this.shadow.querySelector('output');
        //const selectEl = favDialog.querySelector('select');
        // "Update details" button opens the <dialog> modally
        updateButton.addEventListener('click', () => {
            favDialog.showModal();
        });
    }
    
    
    newTaskCallback(callback) {
        let favDialog = this.shadow.getElementById('favDialog');
        let confirmBtn = favDialog.querySelector('#confirmBtn');
        var task = favDialog.querySelector('Task').value();
        confirmBtn.addEventListener("click", callback);
        callback();
        }
    

    setStatuseslist(list){
        let select = this.shadow.querySelectorAll("select")
        console.log(select);
 
        list.forEach(element => {
         
         let option =  document.createElement('option');
         console.log(option);
         option.value = element;
         option.innerHTML = element;
 
         select[0].appendChild(option);
 
        });
    }
    close(){
        const favDialog = this.shadow.getElementById('favDialog');
        favDialog.close();
    }

}

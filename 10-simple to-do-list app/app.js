//Variables targeting the needed node classes and Id
const addTask = document.getElementById('add-task');
const taskContainer = document.querySelector('.task-container');
const inputTask = document.getElementById('input-task');



inputTask.addEventListener('keydown', (e) => {
    if (e.key == 'Enter')
    {
        taskHandler(e);
    }
})
//Event listener fo add button
addTask.addEventListener('click', (e) => {
    // e.preventDefault();
    taskHandler(e);
    
})

function taskHandler(e) {
    
    e.preventDefault();
  
        let  task = document.createElement('div');
        task.classList.add('task');
        let li = document.createElement('li');
        li.innerText = `${inputTask.value}`;
        task.appendChild(li);
        //Check-button
        let checkBtn = document.createElement('button')
        checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
        checkBtn.classList.add('checkTask');
        task.appendChild(checkBtn);
        
        //Delete-button
        let delBtn = document.createElement('button');
        delBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        delBtn.classList.add('delTask');
        task.appendChild(delBtn);

    //Conditional statement to check if the input entered is an empty string or not
    if (inputTask.value == "")
    {
        window.alert('Enter Task Before Trying To Add To List')
    }
    if (inputTask.value !== "")
    {
        //Appended the task div created by click event to the task-container div
        taskContainer.appendChild(task);
    }
    
    inputTask.addEventListener('keydown', (e) => {
        if (e.key == "Enter")
        {
            taskContainer.appendChild(task);   
        }
    }); 
    inputTask.value = "";
    checkBtn.addEventListener('click', (e) => {
        e.currentTarget.parentElement.classList.toggle('checked');
    })
    delBtn.addEventListener('click', (e) => {
        let target = e.target;
        target.parentElement.parentElement.remove();
    })
    
    }
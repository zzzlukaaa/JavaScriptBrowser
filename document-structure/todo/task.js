const tasksList= document.querySelector('#tasks__list'); 
const tasksInput = document.querySelector('.tasks__input');
const tasksAdd= document.querySelector('.tasks__add');           

function addTask(element){                                          
    const strTask = `
    <div class="task">
        <div class="task__title"> ${element}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>
    `
    tasksList.insertAdjacentHTML('beforeEnd',strTask);             
}

tasksAdd.addEventListener('click', event => {        
    if(tasksInput.value.trim().length === 0){
        alert('не ввели задачу');
    }
    else {
        addTask(tasksInput.value);
        tasksInput.value = null;
        tasksInput.focus();
    }
    event.preventDefault();
})

tasksList.addEventListener('click', event => {       
    if(event.target.className.includes( 'task__remove')) {
        event.target.parentElement.remove();  
    }
})
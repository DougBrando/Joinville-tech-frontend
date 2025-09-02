const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', () => {
    const tarefaInput = document.getElementById('add').value;
    if (tarefaInput.trim() != '') {
        const li = document.createElement('li');
        li.className = 'tarefa';
        li.textContent = tarefaInput;
        document.getElementById('tarefas').appendChild(li);
        document.getElementById('add').value = '';
        localStorage.setItem('tarefa', JSON.stringify(tarefaInput));
    }
});

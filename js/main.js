'usestrict'
{

  const tableBody = document.getElementById('todo-body')

  document.querySelector('button').addEventListener('click', () => {

    const tableRecords = document.createElement('tr');
    const tableId = document.createElement('td');
    const tableComment = document.createElement('td');
    const tableStatus = document.createElement('button');
    const tableAction = document.createElement('button');
    const text = document.getElementById('text');
    const btn = document.getElementById('btn');
    // tableStatus.textContent = '作業中';
    tableAction.textContent = '削除';
    // tableBody.appendChild(tableRecords);
    // tableRecords.appendChild(tableId);
    // tableRecords.appendChild(tableComment);
    // tableRecords.appendChild(tableStatus);
    // tableRecords.appendChild(tableAction);

    const todos = [];
    const todo = {};
    todo.task = text.value;
    todo.textContent = '作業中'
    todo.del = tableAction;
    todos.push(todo);
    text.value = '';

    // tableComment.innerHTML = text.value;
    // text.value = "";

  });
}
義t
'usestrict'
{

  const tableBody = document.getElementById('todo-body')
  const todos = [];


  document.querySelector('button').addEventListener('click', () => {

    const tableComment = document.createElement('td');
    const text = document.getElementById('text');
    const btn = document.getElementById('btn');

    const todo = {};
    todo.id = todos.length;
    todo.tableComment = text.value;
    todo.tableStatus = '作業中'
    todo.tableAction = '削除'

    const tr = document.createElement('tr');
    for (const content in todo) {
      const td = document.createElement('td');
      td.textContent = todo[content];
      tr.appendChild(td);
    }

    tableBody.append(tr);

    const statusButton = document.createElement('button');
    statusButton.textContent = todo.tableStatus;

    todos.push(todo);
    text.value = '';
    // for (let i = tableId; i < todos.length; i++) {
    //   todos[i].id = i
    // }

  });

}

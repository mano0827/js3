'usestrict'
{

  const tableBody = document.getElementById('todo-body')

  const tableRecords = document.createElement('tr');
  tableBody.appendChild(tableRecords);

  document.querySelector('button').addEventListener('click', () => {
    const tableId = document.createElement('td');
    const tableComment = document.createElement('td');
    const tableStatus = document.createElement('button');
    const tableAction = document.createElement('button');
    const text = document.getElementById('text');
    const btn = document.getElementById('btn');
    tableStatus.textContent = '作業中';
    tableAction.textContent = '削除';

    tableBody.appendChild(tableId);
    tableBody.appendChild(tableComment);
    tableBody.appendChild(tableStatus);
    tableBody.appendChild(tableAction);


    tableComment = text.value;
    document.querySelector('td'), appendChild(tableComment)

  });
}







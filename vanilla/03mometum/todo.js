const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos',
      DELETEBTN = 'delete';
      PREFIX_TODOLIST = 'toDoList';

let toDos = [];

const saveToDos = () => {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
};

const deleteToDo = (event) => {
  const btn = event.target;
  const li = btn.parentNode;
  const cleanToDos = toDos.filter(toDo => toDo.id !== li.id);
  
  toDoList.removeChild(li);
  toDos = cleanToDos;
  saveToDos();
};


const paintToDo = text => {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = toDos.length + 1;
  const toDoObj = {
    text: text,
    id: PREFIX_TODOLIST + (toDos.length + 1)
  }

  delBtn.innerHTML = DELETEBTN;
  delBtn.addEventListener('click', deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = PREFIX_TODOLIST + newId;
  toDoList.appendChild(li);

  toDos.push(toDoObj);
  saveToDos();
};

const handleSubmit = (event) => {
  event.preventDefault();
  const currentValue = toDoInput.value;
  toDoInput.value = '';
  paintToDo(currentValue);
}

const loadToDos = () => {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if (loadedTodos !== null) {
    const parsedToDos = JSON.parse(loadedTodos);
    parsedToDos.forEach((toDo) => paintToDo(toDo.text));
  }
}

const todoInit = () => {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
};

todoInit();
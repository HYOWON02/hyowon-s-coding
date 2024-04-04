const addBtn = document.querySelector('#addBtn');
const delBtn = document.querySelector('#delBtn');

function keyCodeCheck() {
  if(window.event.keyCode === 13 && todoInput.value !== '') {
    createTodo();
  }
}

// function deleteAll(file) {
// delBtn.addEventListener('click', () => {
//     document.querySelector('file');
//     file.remove();
//   })
// }

function deleteAll() {
  const liList = document.querySelectorAll('#todoList li');
  for(let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }
}

addBtn.addEventListener('click', () => {
  if(todoInput.value !== '') {
    createTodo();
  }
});



function createTodo() { // input 값이 없어도 할일 항목이 생기는 걸 방지 value 값이 없다면 안함
  const newLi = document.createElement('li'); //creatElement 요소를 만드는 메서드
  const newSpan = document.createElement('span');
  const newBtn = document.createElement('button'); //체크박스
  
  // li안에 텍스트 담을 것
  newLi.appendChild(newBtn); // appendChild 선텍 요소안에 자식 요소를 추가하는 메섣
  newLi.appendChild(newSpan);  
  console.log(newLi);

  const todoInput = document.querySelector('#todoInput');
  newSpan.textContent = todoInput.value; //textContent 노드 내의 모든 텍스트 추출
   
  //li요소를 ul요소 안에 넣기
  const todoList = document.querySelector('#todoList');
  todoList.appendChild(newLi);
  console.log(todoList);

  todoInput.value = '';

  //생성된 버튼 클릭하면 생성된 리스트에 complete 클래스가 붙게 한다.
  newBtn.addEventListener('click', () => { //addEventListener 생성되는 이벤트를 감지함 
  newLi.classList.toggle('complete');
  });

  //li 더블 클릭시 전체 삭제
  newLi.addEventListener('dblclick', () => {
    newLi.remove();
  })

  //전체 삭제 버튼
}
// const newBtn = document.createElement('button');



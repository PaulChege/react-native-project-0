const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

itemCount = 0

function newTodo() {
  listItem =  document.createElement('li')
  input =  document.createElement('input')
  input.type = "checkbox"
  input.id = itemCount

  listItem.appendChild(input)
  listItem.appendChild(document.createTextNode("Task" + itemCount))
  list.appendChild(listItem)
  checkbox = document.getElementById(itemCount)
  checkbox.addEventListener( 'change', function() {
      if(this.checked) {
        uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) - 1
      } else {
        uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1
      }
  });
  uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1
  itemCount ++
  itemCountSpan.innerHTML = itemCount
}






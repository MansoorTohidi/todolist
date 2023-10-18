const itemNodes = [];
const Item = function (number, item, deleteItem) {
  this.number = number;
  this.item = item;
  this.deleteItem = deleteItem;
};

const input = document.getElementById("input");
const tasks = document.getElementById("tasks");


function additem(e) {
  e.preventDefault();
if(input.value!=""){
  itemNodes.push(new Item(itemNodes.length-1, input.value, "Delete"));

  const task = document.createElement("div");
  task.classList.add (`task`);

  const number = document.createElement("div");
  number.classList.add("number");
  number.innerHTML = itemNodes.length;
  task.appendChild(number);

  const item = document.createElement("div");
  item.classList.add("item");
  item.innerHTML = input.value;
  task.appendChild(item);

  const deleteItem = document.createElement("div");
  deleteItem.classList.add("delete");
  deleteItem.innerHTML = "Del";
  task.appendChild(deleteItem);

  tasks.appendChild(task);

  input.value = "";
  deleteItem.addEventListener("click", handleDelete);
}

  
}

function handleDelete(e) {
  e.target.parentNode.remove();
  itemNodes.splice(parseInt((e.target.parentNode.children[0].innerHTML) - 1), 1);

  for (let i = 0; i < itemNodes.length; i++) {
    tasks.children[i].children[0].innerHTML = i + 1;
    itemNodes[i].number = i + 1;
  }

}

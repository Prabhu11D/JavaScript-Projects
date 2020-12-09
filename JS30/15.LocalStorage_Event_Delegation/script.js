const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const removeItem = document.querySelector('button');
let items = JSON.parse(localStorage.getItem("items")) || [];

function storeData(items) {
  localStorage.setItem("items", JSON.stringify(items));
}

function displayItems(items = [], html) {
  html.innerHTML = items.map((item, index) => {
    return `
        <li>
            <input type="checkbox" data-index="${index}" id="item__${index}" ${item.done ? 'checked' : ''}>
            <label for="item__${index}">${item.text}</label>
        </li>
        `;
  }).join('');
}

function deleteAll(){
    localStorage.removeItem('items');
    items = [];
    itemsList.innerHTML = '';
}

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  let item = {
    text,
    done: false,
  };
  items.push(item);
  storeData(items);
  displayItems(items, itemsList);
  this.reset();
}

  function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    console.log(items);
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    displayItems(items, itemsList);
  }

displayItems(items, itemsList);
addItems.addEventListener("submit", addItem);
removeItem.addEventListener('click', deleteAll);
itemsList.addEventListener('click', toggleDone);
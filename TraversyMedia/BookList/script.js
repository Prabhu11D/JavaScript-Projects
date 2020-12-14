class Book {
  constructor(name, author, ISBN) {
    this.name = name;
    this.author = author;
    this.ISBN = ISBN;
  }
}

class Store {
  static getBooks() {
    return JSON.parse(localStorage.getItem("books")) || [];
  }

  static storeBook(books) {
    localStorage.setItem("books", JSON.stringify(books));
  }
  static addBook(book) {
    const books = this.getBooks();
    books.push(book);
    this.storeBook(books);
  }
  static removeBook(ISBN) {
    const books = this.getBooks();
    books.forEach((book, index) => {
      if (book.ISBN === ISBN) {
        books.splice(index, 1);
      }
    });
    this.storeBook(books);
  }
}

class UI {
  static tableBody = document.querySelector("tbody");
  static showAlert(message, type) {
    const alert = `
      <div class="alert ${type}">${message}</div>
      `;
    document.body.insertAdjacentHTML("beforebegin", alert);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 2000);
  }
  static template(book) {
    return `
        <tr>
            <td class="name">${book.name}</td>
            <td class="author">${book.author}</td>
            <td class="ISBN">${book.ISBN}</td>
            <td><img class="trash" src="img/trash.png" /></td>
          </tr>
        `;
  }
  static loadBookList() {
    const books = Store.getBooks();
    books.forEach((book) => {
      this.tableBody.insertAdjacentHTML("beforeend", this.template(book));
    });
  }
  static addBookList(book) {
    this.tableBody.insertAdjacentHTML("beforeend", this.template(book));
  }
}

// On load
document.addEventListener("DOMContentLoaded", () => {
  UI.loadBookList();
  UI.showAlert("You Are Welcome !", "greeting");
});

// Form Submit Book
document.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const name = form.querySelector("#title").value;
  const author = form.querySelector("#author").value;
  const ISBN = form.querySelector("#ISBN").value;
  if (name == "" || author == "" || ISBN == "") {
    UI.showAlert("Fill all the Fields...", "danger");
  } else {
    const book = new Book(name, author, ISBN);
    UI.addBookList(book);
    Store.addBook(book);
    UI.showAlert("Book Added Successfully", "success");
  }

  form.reset();
});

const tableBody = document.querySelector("tbody");
tableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("trash")) {
    const parent = e.target.parentElement.parentElement;
    const ISBN = parent.querySelector(".ISBN").textContent;
    parent.remove();
    Store.removeBook(ISBN);
    UI.showAlert("Book Removed Successfully", "success");
  }
});

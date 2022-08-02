import Bookshelf from "./books";

let myBookshelf = new Bookshelf();

if (myBookshelf.LoadBooksFromLocal()) {
  console.log("There are local books!")
} else {
  console.log("No books where found :(")
}

const render = () => {
  document.querySelector('.awesomeList').innerHTML = '';
  myBookshelf.Books.forEach((books) => {
    const List = document.querySelector('.awesomeList');
    const element = document.createElement('div');
    element.innerText = `${books.title}\n${books.author}\n`;

    function deleteBook(event) {
      const deleteButton = event.target;
      const idToDelete = deleteButton.id;
      removeBooks(idToDelete);
      render();
    }

    // Remove Button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Remove';
    deleteButton.onclick = deleteBook;
    deleteButton.id = books.id;

    List.appendChild(element);
    element.appendChild(deleteButton);
  });
};

// Controller
const button = document.querySelector('.button');
button.addEventListener('click', () => {
  const titletextbox = document.getElementById('title');
  const authortextbox = document.getElementById('author');
  const title = titletextbox.value;
  const author = authortextbox.value;

  myBookshelf.AddBook(title, author);
  render();
});

render();
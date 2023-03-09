let library = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
}
let title = '';
let author = '';
let pages = '';
let read = '';

let createnewbook = function () {
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    read = document.getElementById("read");

    if (read.checked == true) {
        read = "You have read this book";
    } else {
        read = "You have not read this book";
    }

    let newBook = new Book(title, author, pages, read);

    library.push(newBook);
    kys();

    document.getElementById("inputdiv").style.display = "none";

    title = document.getElementById("title").value = '';
    author = document.getElementById("author").value = '';
    pages = document.getElementById("pages").value = '';
}

function kys (){
    const table = document.querySelector('tbody')
    table.innerHTML = '';
                library.forEach((item) => {
                    table.innerHTML = table.innerHTML + `<tr>
                            <td>${item.title}</td>
                            <td>${item.author}</td>
                            <td>${item.pages}</td>
                            <td>${item.read}</td>
                        </tr>`
                })
            }



let button = document.getElementById("popupbutton");

function popup() {
    document.getElementById("inputdiv").style.display = "grid";
}


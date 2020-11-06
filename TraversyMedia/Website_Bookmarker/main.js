/**
 *   Basic Algorithm
 *      1. load the local storage bookmark in frontend
 *      2. on submitting add data to local storage
 *             2.1 check the data is valid
 *             2.2 then store
 *      3. do step 1
 *      4. on delete, delete the data in local storage
 *      5. do step 1
 *
 */

const myform = document.getElementById("myform");

myform.addEventListener("submit", addBookmark);

function addBookmark(e) {
  var sitename = document.getElementById("siteName").value;
  var siteURL = document.getElementById("siteURL").value;

  var bookmark = {
    name: sitename,
    url: siteURL,
  };

  if (localStorage.getItem("bookmarks") === null) {
    bookmarks = [];
    bookmarks.push(bookmark);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    fetchBookmarks();
  } else {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    fetchBookmarks();
  }

  myform.reset();
  e.preventDefault();
}

function fetchBookmarks(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    var bookmarkResult = document.querySelector('.bookmarkResults');
    bookmarkResult.innerHTML = '';

    for(i=0; i<bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarkResult.innerHTML += '<div class="result">'+
                                    '<a href="https://'+url+'" target="_blank">'+name+'</a>'+
                                    '<i onclick="deleteBookmark(\''+url+'\')" class="delete">'+
                                    '<img src="delete.svg" alt="trash"></i></div>';
    }
}

function deleteBookmark(url){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    for(i=0; i<bookmarks.length; i++){
        if(bookmarks[i].url == url){
            bookmarks.splice(i,1);
            break;
        }
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    fetchBookmarks();
}

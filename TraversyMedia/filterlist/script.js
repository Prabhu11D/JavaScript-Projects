const search = document.getElementById('searchInput');
const contactList = document.getElementById('contact-list');

search.addEventListener('keyup', filterName);

function filterName(){
    let searchValue = search.value.toUpperCase();
    
    let names = contactList.querySelectorAll('li.contact-name');
    Contact_length = names.length;
    for(let i=0; i< Contact_length; i++){
        let name = names[i].getElementsByTagName('a')[0].innerText.toUpperCase();
        let check = name.indexOf(searchValue);
        if(check > -1){
            names[i].style.display = '';
        }else{
            names[i].style.display = 'none';
        }
    }
}
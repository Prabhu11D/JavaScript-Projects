const greeting = document.querySelector(".greeting");
const username = document.querySelector(".username");
const time = document.querySelector(".time");

function setTime() {
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    const months = [
        "January",
        "Febraury",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const now = new Date();
    let day = days[now.getDay() - 1];
    let date = now.getDate();
    let month = months[now.getMonth()].slice(0,3);
    let year = now.getFullYear();

    time.innerHTML = `${day}, ${date} ${month} ${year}`;
}


function setGreeting(){
    let greet = "Good Night";
    let time = new Date().getHours();
    if(time > 4 && time < 11){
        greet = "Good Morning";
    }else if(time > 11 && time < 16){
        greet = "Good Afternoon";
    }else if(time > 16 && time < 19){
        greet = "Good Evening";
    }
    
    greeting.textContent = greet;
}
setGreeting();
setTime();


// ----------------- name

function getName(){
    let name = localStorage.getItem('todo_username');
    if(name){
        username.textContent = name;
    }
}
getName();

function setName(){
    localStorage.setItem('todo_username', username.textContent);
}

username.addEventListener('blur', setName);
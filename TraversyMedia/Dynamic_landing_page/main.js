const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name'),
      focus = document.getElementById('focus');


// Showing Time
function showTime(){
  let today = new Date(),
      hour = today.getHours(),
      minute = today.getMinutes(),
      second = today.getSeconds();

  const AM_PM = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;

  time.innerHTML = `${hour}:${addZero(minute)}:${addZero(second)} ${AM_PM}`;

  function addZero(num){
    return (num<10 ? "0" : "")+num;
  }

  setTimeout(showTime, 1000);
}



// Set Background Image
function setBGImage(){
  let hour = new Date().getHours();
  let morning = hour > 4 && hour < 12;
  let afternoon = hour > 12 && hour < 16;
  let evening = hour > 16 && hour < 19;
  let night = hour > 19 && hour < 4;

  if(morning){
    greeting.textContent = "Good Morning";
    document.body.style.color = "#fff";
    document.body.style.backgroundImage = "url('img/morning.jpg')";
  }else if(afternoon){
    greeting.textContent = "Good Afternoon";
    document.body.style.backgroundImage = "url('img/afternoon.jpg')";
  }else if(evening){
    greeting.textContent = "Good Evening";
    document.body.style.backgroundImage = "url('img/afternoon.jpg')";
  }else if(night){
    greeting.textContent = "Good Night";
    document.body.style.backgroundImage = "url('img/night.jpg')";
  }
  
}


// Setting Name
function getName(){
  let nameValue = localStorage.getItem('name');
  if(nameValue === null){
    name.textContent = '[Enter Name]';
  }else{
    name.textContent = nameValue;
  }
};

function setName(e){
  if(e.type == 'keypress'){
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  }else{
    localStorage.setItem('name', e.target.innerText);
  }
}



// Setting Focus
function getFocus(){
  let focusValue = localStorage.getItem('focus');
  if(focusValue === null){
    focus.textContent = '[Enter Focus]';
  }else{
    focus.textContent = focusValue;
  }
};

function setFocus(e){
  if(e.type == 'keypress'){
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  }else{
    localStorage.setItem('focus', e.target.innerText);
  }
}

showTime();
setBGImage();
getName();
getFocus();

name.addEventListener('keypress', setName);
name.addEventListener('blue', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
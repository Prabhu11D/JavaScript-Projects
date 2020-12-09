const nav = document.querySelector('#main');
const topNav = nav.offsetTop;

function fixNav(){
    if(window.scrollY >= topNav){
        document.body.style.paddingTop = nav.offsetHeight+"px";
        document.body.classList.add('fixed-nav');
    }else{
        document.body.style.paddingTop = "";
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);
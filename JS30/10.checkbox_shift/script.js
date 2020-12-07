const checkBoxes = document.querySelectorAll('input[type = "checkbox"]');
let lastChecked;

function handleClick(e){
    let inBetween = false;

    if(e.shiftKey && this.checked){
        checkBoxes.forEach(cb => {
            if(cb == this || cb == lastChecked){
                inBetween = !inBetween;
            }

            if(inBetween){
                cb.checked = true;
            }
        })
    }

    lastChecked = this;
}

checkBoxes.forEach(checkbox => checkbox.addEventListener('click', handleClick));
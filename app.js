let keyboard = document.querySelector('.keyboard');

/*function clicou(e) {
    if(e.keyCode === 13) {
        console.log(keyboard.value)
    } else {
        return;
    }
} */


function clicou(e) {
    if(e.keyCode === 13 && e.ctrlKey === true){
        console.log(keyboard.value)
    } else {
        return;
    }
}
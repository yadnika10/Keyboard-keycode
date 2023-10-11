let KeyBoard = document.querySelector(".keyBoard");
const audio = new Audio("click-button-140881.mp3")
document.body.addEventListener("keydown",function(e){
    let key = e.key;
    if(e.shiftKey && e.keyCode != 16){
        key = `shift+${e.key}`
    }
    if(e.ctrlKey && e.keyCode != 17){
        key = `Ctrl+${e.key}`
    }
    let keyCode = e.keyCode;
    KeyBoard.innerHTML = `
    <h1 class = "key">You Pressed: <span>${key}</span></h1>
    <div class = "code">${keyCode}</div>`;
    audio.play();
});
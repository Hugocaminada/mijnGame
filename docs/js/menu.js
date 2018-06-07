var music = document.getElementById("gameMusic");

function startGame() {
    localStorage.setItem("startGame", "user");
    window.location.href = 'index';
}   

function startMusic() {
    music.play();
}

function soundControl(checkboxElem) {
    if (checkboxElem.checked) {
        music.muted = true; 
    } else {
        music.muted = false; 
    }
}

function show(elementID) {
    var ele = document.getElementById(elementID);
    if (!ele) {
        alert("no such element");
        return;
    }
    var pages = document.getElementsByClassName('page');
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
} 
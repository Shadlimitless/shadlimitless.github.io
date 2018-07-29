var colors = [];
var pickedColor;
var numberOfSquares = 6;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay"); 
var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    createGame();
}


function setupModeButtons () {
    for(var i=0; i<modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("Selected");
            modeButtons[1].classList.remove("Selected");
            this.classList.add("Selected");
            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
            createGame();
        });
    }
}

function setupSquares () {
    for(var i=0; i<square.length; i++) {
        square[i].addEventListener("click", function(){
            //Grab color of clicked Square
            var clickedColor = this.style.backgroundColor;
    
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                //h1.style.background = clickedColor;
                resetButton.textContent = "Play Again?";
            }
            else
            {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function createGame() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    for(var i=0; i<square.length; i++) {
        square[i].style.backgroundColor = colors[i];
        if(colors[i]) {
            square[i].style.backgroundColor = colors[i];
            square[i].style.display = "block";
        }
        else{
            square[i].style.display = "none";
        }
        
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function (){
    createGame();
})



function changeColors(color) {
    for(var i=0; i<square.length;i++) {
        square[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random()*colors.length);
    console.log(random);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i< num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}
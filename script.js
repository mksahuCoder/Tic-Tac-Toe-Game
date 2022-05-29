
let ting = new Audio("ting.mp3");
let gameOver = new Audio("gameOver.mp3");

let turn = "X";
let game = false;

// function to change the turn

const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}


// function to check win


let checkWin = ()=>{
    let boxText = document.getElementsByClassName("boxText");
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8]

    ]
    win.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " Won"
            game = true;
            gameOver.play();
        }
    })
}


//game logic

let box = document.getElementsByClassName("box");
Array.from(box).forEach(element =>{
    let boxText = element.querySelector(".boxText");
    element.addEventListener("click", ()=>{
        if(boxText.innerText===""){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            ting.play();
            if(!game){
                document.getElementsByClassName("info")[0].innerText = "Turn for  "  + turn ;
            }

        }

    })
})

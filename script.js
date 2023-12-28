
let boxes=document.querySelectorAll(".box");
let btnRef = document.querySelector("button");
let result =document.querySelector(".result");

let turnX=true;
let final=true;
let count=0;

const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach(box => {
    box.addEventListener("click",() =>{
        if(turnX && box.innerText=="" && final){
            box.textContent="X";
            turnX=false;
            count++;
        }
        else if(!turnX && box.innerText=="" && final){
            box.textContent="O";
            turnX=true;
            count++;
        }
        checkWinner();
    });
});

const checkWinner = ()=>{
    for( let pattern of winningPattern){
        // console.log(boxes[pattern[0]].innerText);
        // console.log(boxes[pattern[0]].firstElementChild.innertext,boxes[pattern[1]].firstElementChild.innertext,boxes[pattern[2]].firstElementChild.innertext);
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1==val2 && val2 == val3){
                if(turnX){
                    // alert("Winner O");
                    result.textContent="Winner O!!";
                    final=false;
                }
                else{
                    // alert("Winner X");
                    result.textContent="Winner X!!";
                    final=false;
                }
                // alert("WInner");
                // boxes.forEach(box=>{box.textContent=``;})
                // turnX=true;
                // count=0;
            }
        }
    }
    if(count==9 && final==true){
        // alert("Tied");
        result.textContent="Tied!!"
        // boxes.forEach(box=>{box.textContent=``;})
        // turnX=true;
        // count=0;
    }
}

btnRef.onclick=()=>{
    boxes.forEach(box=>{
        box.textContent=``;
    });
    turnX=true;
    final=true;
    count=0;
    result.textContent="";
};

// btnRef.onclick() = boxes.forEach(box=>{
//     box.innerHTML=``;
// });

// resetfunc=function(){
//     boxes.forEach(box=>{
//         box.innerHTML=``;
//     });
// }






















































/*
let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
//Winning Pattern Array
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
//Player 'X' plays first
let xTurn = true;
let count = 0;

//Disable All Buttons
const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  //enable popup
  popupRef.classList.remove("hide");
};

//Enable all buttons (For New Game and Restart)
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  //disable popup
  popupRef.classList.add("hide");
};

//This function is executed when a player wins
const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};

//Function for draw
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};

//New Game
newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

//Win Logic
const winChecker = () => {
  //Loop through all win patterns
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    //Check if elements are filled
    //If 3 empty elements are same and would give win as would
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        //If all 3 buttons have same values then pass the value to winFunction
        winFunction(element1);
      }
    }
  }
};

//Display X/O on click
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      //Display X
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      //Display Y
      element.innerText = "O";
      element.disabled = true;
    }
    //Increment count on each click
    count += 1;
    if (count == 9) {
      drawFunction();
    }
    //Check for win on every click
    winChecker();
  });
});
//Enable Buttons and disable popup on page load
window.onload = enableButtons;

*/
let boxes=document.querySelectorAll('.cell');
let resetbutton=document.querySelector('#resetButton');
let winner=document.querySelector('.winner');
let turn=true; //true for X and false for O
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
        boxes.forEach(box=>{
            box.addEventListener('click',()=>{
                if(turn){
            box.innerText = 'X';
            box.style.color = 'red';
            turn = false;
        }else{
            box.innerText = 'O';
            box.style.color = 'blue';
            turn = true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const hidebtns=()=>{
    boxes.forEach(box=>{
        box.disabled=true;
    });
};
const checkwinner = () => {
    setTimeout(() => {
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (
                boxes[a].innerText &&
                boxes[a].innerText === boxes[b].innerText &&
                boxes[a].innerText === boxes[c].innerText
            ) {
                winner.innerText = `Player ${boxes[a].innerText} wins!`;
                winner.classList.remove('hide');
                hidebtns();
                return;
            }
        }
        if ([...boxes].every(box => box.innerText)) {
            winner.innerText = "It's a draw!";
            winner.classList.remove('hide');
        }
    }, 50);
};
const resetGame=()=>{
    boxes.forEach(box=>{
        box.innerText='';
        box.disabled=false;
    });
    turn=true;
    winner.classList.add('hide');
};
resetbutton.addEventListener('click',resetGame);






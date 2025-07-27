let currentPlayer = 'X';
let arr = Array(9).fill(null);
const declareWinner = document.getElementById("winner");
const button = document.getElementById("butt");

let flag = 0;

function checkWinner() {
    if (
        (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6]) 
    ) {
        declareWinner.innerText = `Winner ${currentPlayer}`;
        //document.write(`Winner ${currentPlayer}`);
        flag = 1;
        return;
    }
    if(!arr.some(e => e === null)){
        declareWinner.innerText = `Game Draw!!`;
        //document.write("Game Draw!!");
        flag = 1;
        return;
    }
    
}

function handleClick(el){
    const id = Number(el.id);
    if(arr[id] !== null ) return;
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    if(flag === 1) {
        el.innerText = '';
        return;
    }
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}


// if (flag === 1) {
//     function handleClick(el){
//         console.log(flag);
//         const id = Number(el.id);
//         if(arr[id] !== null ) return;
//         arr[id] = currentPlayer;
//         el.innerText = currentPlayer;
//     }
// }



button.addEventListener("click", () => {
    location.reload();
});
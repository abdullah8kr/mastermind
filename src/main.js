// const compMove = [];
// computerMove();
// const compareButton = document.querySelector('.compare-btn');
// compareButton.addEventListener('click', playerInput);


// function computerMove() {
//   for (let i = 1; i <= 4; i++) {
//     const randomNum = Math.random();
//     switch (true) {
//       case (randomNum <= 1 / 6):
//         compMove.push('r');
//         break;
//       case (randomNum <= 2 / 6):
//         compMove.push('b');
//         break;
//       case (randomNum <= 3 / 6):
//         compMove.push('g');
//         break;
//       case (randomNum <= 4 / 6):
//         compMove.push('y');
//         break;
//       case (randomNum <= 5 / 6):
//         compMove.push('wh');
//         break;
//       case (randomNum <= 6 / 6):
//         compMove.push('bl');
//         break;

//       default:
//         break;
//     }
//   }
  
// }

// let playerMove = [];
// function playerInput() {
//   const inputMove = [];
//   inputMove.push(document.querySelector('#input1').value);
//   inputMove.push(document.querySelector('#input2').value);
//   inputMove.push(document.querySelector('#input3').value);
//   inputMove.push(document.querySelector('#input4').value);
//   const valid = inputMove.every( i => i === 'r' || i === 'b' || i === 'g' || i === 'y' || i === 'wh' || i === 'bl')

//   if(valid){
//     playerMove = [...inputMove]
//     playGame(playerMove, compMove)
//     console.log(playerMove)
//   }else{
//     console.log(`Enter valid colors`)
//   }



// }



// function playGame(playerMove, compMove) {
//   let result = [];
//   const tempPlayerMove = [...playerMove];
//   const tempCompMove = [...compMove];
//   for (let i = 0; i < 4; i++) {
//     if (tempPlayerMove[i] === tempCompMove[i]) {
//       result.push('bl');
//       tempPlayerMove[i] = null;
//       tempCompMove[i] = null;
//     }
//   }

//   for (let j = 0; j < tempCompMove.length; j++) {
//     if (tempCompMove[j] === null) continue
//     for (let i = 0; i < tempPlayerMove.length; i++) {
//       if (tempPlayerMove[i] === null) continue;
//       if (tempPlayerMove[i] === tempCompMove[j]) {
//         result.push('wh')
//         tempPlayerMove[i] = null;
//         tempCompMove[j] = null;
//         break;
//       }
//     }
//   }

//   if (result.length === 4 && result.every(item => item === 'bl')) {
//     console.log('u win')
//   } else {
//     console.log(result)
//   }
// }



// Descend & Climb the stairs
function getStairsMovementDirection(stairNumber,isClimbingStairs) {
  if (isClimbingStairs === false){
    if (stairNumber % 2){
      return "right"
    } else {
      return "down"
    }
  }
  else if (isClimbingStairs === true){
    if (stairNumber % 2){
      return "right"
    } else {
      return "up"
    }
  }
};

function getZigZagMovementDirection(step){
  if (step % 3){
    return "right"
  } else if (step % 2){
    return "down"
  } else {
    return "up"
  }
};

function manuallyControl(move) {
  if (move === "KeyW"){
    moveDirection("up");
  } else if (move === "KeyD"){
    moveDirection("right");
  } else if (move === "KeyS"){
    moveDirection("down");
  } else if (move === "KeyA"){
    moveDirection("left");
  } 

  else if (move === "ArrowUp"){
    moveDirection("up");
  } else if (move === "ArrowRight"){
    moveDirection("right");
  } else if (move === "ArrowDown"){
    moveDirection("down");
  } else if (move === "ArrowLeft"){
    moveDirection("left");
  }
}

function givePotion2Answer(list){
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0){
      sum += list[i]
    } 
  }
  return sum;
}

function givePotion3Answer(list){
  let find = list[0];
  for (let i = 0; i < list.length; i++) {
    if (find < list[i]){
      find = list[i];
    }
  }
  return find;
}

function givePotion4Answer(input, toCapitalize){
  for (let i = 0; i < input.length; i++) {
    for (let k = 0; k < toCapitalize.length; k++) {
      if (input[i] === toCapitalize[k]){
        input = input.replace(input[i], toCapitalize[k].toUpperCase());
      }
    }
  }
  return input;
}

function givePotion5Answer(hours, minutes, seconds, secondsToAdd){
  let finalAnswer = 0
  if ((seconds + secondsToAdd) >= 60) {
    minutes = minutes + 1
    finalAnswer = seconds + secondsToAdd - 60
  } if (minutes === 60) {
    hours = hours + 1
    minutes = 0
  } if (hours > 23){
    hours = 0;
  } if ((seconds + secondsToAdd) < 60) {
    finalAnswer = seconds + secondsToAdd
  }
  return (`${hours}:${minutes}:${finalAnswer}`);
}


function givePotion6Answer(input){
  let numbers = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] >= 0) {
      numbers +=  +input[i] ;
    }
  }
  return numbers;
}

function givePotion7Answer(input){
    let numbers = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] >= 0) {
      numbers +=  +input[i] ;
    }
  }
  return numbers;
}

function givePotion8Answer(number){
  if (number % 2 === 0){
    return false;
  } else {
    return true;
  }
}

function givePotion9Answer(list){
  let sum = 0
  list.sort(function(a, b){return a-b})
  for (let i = 0; i < list.length; i++) {
      sum = list[0] + list[1]
    }
    return sum
}

function givePotion10Answer(letterToFind, input){
  let i;
  for (i = 0; i < input.length; i ++) {
      if (letterToFind === input[i]) {
          return i;
      }
  }
  return -1;
}

function givePotion11Answer(input, letterToReplace, letterToPutInstead){
  let finalAnswer = input.split(letterToReplace).join(letterToPutInstead);
  return finalAnswer;
  }

function givePotion12Answer(numbers){
  let sum= 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += Math.abs(+numbers[i]);
  }
  return sum;
}

// let pos = [0,0];
// let history = [0,0];

function moving (string){
  return moveDirection(string)
}

function hasMovedToTile(direction, tileToCheck){
if (direction === "down"){
  if (tileToCheck === 11){
    moving ("down")
  }
} 
if (direction === "up"){
  if (tileToCheck === 11){
    moving ("up");
  }
}

if (direction === "right"){
  if (tileToCheck === 11){
    moving ("right")
  }
}

if (direction === "left"){
  if (tileToCheck === 11){
    moving ("left");
  }
}
}

function level7Move (elementLeftOfPrince, elementRightOfPrince, elementUpOfPrince, elementDownOfPrince){

}

function level8Move (){
  
}

// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    { name: "getStairsMovementDirection", content: getStairsMovementDirection, type: "function" },
    { name: "getZigZagMovementDirection", content: getZigZagMovementDirection, type: "function" },
    { name: "manuallyControl", content: manuallyControl, type: "function" },
    { name: "givePotion2Answer", content: givePotion2Answer, type: "function" },
    { name: "givePotion3Answer", content: givePotion3Answer, type: "function" },
    { name: "givePotion4Answer", content: givePotion4Answer, type: "function" },
    { name: "givePotion5Answer", content: givePotion5Answer, type: "function" },
    { name: "givePotion6Answer", content: givePotion6Answer, type: "function" },
    { name: "givePotion7Answer", content: givePotion7Answer, type: "function" },
    { name: "givePotion8Answer", content: givePotion8Answer, type: "function" },
    { name: "givePotion9Answer", content: givePotion9Answer, type: "function" },
    { name: "givePotion10Answer", content: givePotion10Answer, type: "function" },
    { name: "givePotion11Answer", content: givePotion11Answer, type: "function" },
    { name: "givePotion12Answer", content: givePotion12Answer, type: "function" },
    { name: "level7Move", content: level7Move, type: "function" },
    // { name: "level8Move", content: level8Move, type: "function" },
  ]

} catch (error) {
  toExport = { error: error.message }
}

export { toExport };
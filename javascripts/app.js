// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: "(0,0);"
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  var currentDirection;
  currentDirection = rover.direction;
  if (currentDirection === "N"){
    currentDirection = "W";
  } else if (currentDirection === "W"){
    currentDirection = "S";
  } else if (currentDirection === "S"){
    currentDirection = "E";
  } else if (currentDirection === "E"){
    currentDirection = "N";
  }
  rover.direction = currentDirection;
}

function turnRight(rover){
  console.log("turnRight was called!");
  var currentDirection;
  currentDirection = rover.direction;
  if (currentDirection === "N"){
    currentDirection = "E";
  } else if (currentDirection === "E"){
    currentDirection = "S";
  } else if (currentDirection === "S"){
    currentDirection = "W";
  } else if (currentDirection === "W"){
    currentDirection = "N";
  }
  rover.direction = currentDirection;
}

function moveForward(rover){
  console.log("moveForward was called");
  var currentDirection;
  var currentX;
  var currentY;
  currentDirection = rover.direction;
  currentX = rover.x;
  currentY = rover.y;

  if (currentDirection === "N" && currentY > 0){
    currentY--;
  } else if (currentDirection === "E" && currentX < 9){
    currentX++;
  } else if (currentDirection === "S" && currentY < 9){
    currentY++;
  } else if (currentDirection === "W" && currentX > 0){
    currentX--;
  }
  // check for Obstacles
  if(isAnObstacle(currentX, currentY)){
    console.log("There is an obstacle");
  } else {
  rover.x = currentX;
  rover.y = currentY;
  setTravelLog();
  }
}

function moveBackward(rover){
  console.log("moveBackward was called");
  var currentDirection;
  var currentX;
  var currentY;
  currentDirection = rover.direction;
  currentX = rover.x;
  currentY = rover.y;

  if (currentDirection === "N" && currentY < 9){
    currentY++;
  } else if (currentDirection === "E" && currentX > 0){
    currentX--;
  } else if (currentDirection === "S" && currentY > 0){
    currentY--;
  } else if (currentDirection === "W" && currentX < 9){
    currentX++;
  }

  // check for Obstacles
  if(isAnObstacle(currentX, currentY)){
    console.log("There is an obstacle");
  } else {
  rover.x = currentX;
  rover.y = currentY;
  setTravelLog();
  }

}

function setTravelLog(){
  rover.travelLog = rover.travelLog + "("+rover.x + "," + rover.y +");";
}

function isAnObstacle(posX, posY){
  return marsGrid[posX][posY]==='#';
}


function commands (instructions){
  var commaList = "";
  commaList = instructions;
  
  for (var i =0; i < commaList.length; i++){
    if(commaList[i] === "r"){
      turnRight(rover);
    } else if (commaList[i] === "l"){
      turnLeft(rover);
    } else if(commaList[i] === "f"){
      moveForward(rover);
      
    } else if(commaList[i] === "b"){
      moveBackward(rover);
    
    }
  }
  console.log("The rover has traveled over: " + rover.travelLog);
}

var marsGrid = [ 
  ['R','.','.','.','.','#','.','.','#','.'],
  ['.','.','.','.','.','#','.','.','#','.'],
  ['.','.','.','#','.','.','.','.','.','.'],
  ['#','#','.','.','.','#','.','.','.','.'],
  ['.','#','.','.','.','#','.','.','.','.'],
  ['.','#','#','#','.','.','.','.','.','.'],
  ['.','.','.','.','.','.','.','.','.','.'],
  ['.','.','.','.','.','.','.','.','#','.'],
  ['.','#','#','#','.','.','.','.','#','.'],
  ['.','.','.','.','.','.','.','.','#','.'], ];

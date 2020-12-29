

/* Command definitions */
var commands = [
  {
    "command": "goTo",
    "takes": "location",
    "rules": "none",
    "result": "BS is at location."
  },
  {
    "command": "open",
    "takes": "container object or container location",
    "rules": "Object is in closed state.",
    "result": "Object or location is open."
  },
   {
    "command": "close",
    "takes": "container object or container location",
    "rules": "Object is in open state.",
    "result": "Object or location is closed."
  },
  {
    "command": "get",
    "takes": "object from location",
    "rules": "Object is in current location. Container location must be open. Right hand is free.",
    "result": "Object is in right hand."
  },
  {
    "command": "put",
    "takes": "object from right hand",
    "rules": "Right hand must hold object. BS must be at open location.",
    "result": "Object is in location. Right hand is free."
  },
  {
    "command": "hold",
    "takes": "object from right hand",
    "rules": "Right hand must hold object.  Left hand must be free.",
    "result": "Object is in Left hand. Right hand is free."
  },
  {
    "command": "take",
    "takes": "object",
    "rules": "Object is in left hand. Right hand is free.",
    "result": "Object is in right hand."
  },
  {
    "command": "scoop",
    "takes": "spreadable object",
    "rules": "Open container is in Left hand. Knife is in right hand. ",
    "result": "Knife holds spread to coat 1 slice."
  },
  {
    "command": "spread",
    "takes": "spreadable object",
    "rules": "Knife is in right hand after scooping spreadable object. Left hand is steadying a slice.",
    "result": "Slice is coated with spreadable object. Knife is clean."
  },
  {
    "command": "alignFaceDown",
    "takes": "slice",
    "rules": "Coated slice is in right hand. Target slice is on plate, coated side face up.",
    "result": "Coated slice from right hand is aligned face down over coated slice face up on plate. You have a sandwich."
  }
]



/* Functions */

function initialize(){
  let title=prompt("Name of program?");
  let coder=prompt("Name of coder?");
  let nC = new Code(1, title+" by "+coder);
  return nC;
}

function start() {
  program.push(initialize());
}

function loadCommands(){
  let objectList=JSON.stringify(commands)
  alert(objectList);
}

function showCode(lineNumbers){
  var code = document.getElementById("code");
  lnNumbers=lineNumbers;
  programOutput="\n";
  for (let i=0;i<program.length;i++){
    programOutput+=program[i].toString();
  }
  code.innerHTML=programOutput;
}

function addCommand(){
    let cWord = prompt("Command?");
    let cTakes = prompt("Argument?");
    let cRules = prompt("Rules?");
    let cResult = prompt("Result?");
    let newCommand=[cWord,cTakes,cRules,cResult];
    commands.push(newCommand);
  }

function addLineByParts(){
    let lineNum = prompt("Line number?");
    lineNum=parseInt(lineNum);
    let lineCommand = prompt("Command?");
    let lineArgument = prompt("Argument?");
    let nCL = new CommandLine(lineNum,lineCommand,lineArgument);
    program.push(nCL);
}

function addLineString(){
  let lineNum=0,lineCommand=null,lineArgument=null,lChar=0,startChar=0;
  let lineString=prompt("Enter line with line number");
  for(let i=startChar;i<(lineString.length-startChar);i++){
    if (lineString.charAt(i)===" "){
      lineNum=parseInt(lineString.slice(0,i));
      console.log("Line number: "+lineNum);
      startChar=i+1;
    }
  }
  for(let i=startChar;i<(lineString.length-startChar);i++){
    if (lineString.charAt(i)==="("){
      lineCommand=lineString.slice(startChar,i);
      console.log("Command: "+lineCommand);
      startChar=i;
    }
  }
  for(let i=startChar+1;i<(lineString.length-1);i++){
    if (lineString.charAt(i)===")"){
      lineArgument=lineString.slice(startChar+1,(lineString.length-2));
      console.log("Argument: "+lineArgument);
    }
  }
  let nCL = new CommandLine(lineNum,lineCommand,lineArgument);
  program.push(nCL);
  showCode();
}

function checkLine(){
  let lineToCheck = program[program.length - 1];
  if (lineToCheck[lineToCheck.length - 1] ==";"){
    if (lineToCheck[1]=="hold"){
      if (isOpen("left")){

      }
      else {
        alert("Left hand is not empty.  Cannot hold new object.  Line was removed.");
        program.pop();
      }
    }
  }
  else {
    alert("Line did not end in semicolon and was removed. Re-enter properly.");
    program.pop();
  }
}

function isOpen(myObject){
  if (myObject.open == true){
    console.log(myObject.name+" is open.");
    return true;
  }
  else {
    console.log(myObject.name+" is not open.");
    return false;
  }
}

function isEmpty(myHand){
  if (myHand.holding == null){
    console.log(myHand.name+" is empty.");
    return true;
  }
  else {
    console.log(myHand.name+" is holding a " + myHand.holding);
    return false;
  }
}

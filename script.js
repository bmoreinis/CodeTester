var ln = 0;
var program=[];

class Code {
  constructor(lineNum, command) {
    this.lineNum = lineNum;
    this.command = "/* "+command+" */";
  }
}

class CommandLine extends Code {
  constructor(lineNum, command, argument) {
    super(lineNum,command);
    this.argument = "("+argument+");";
  }
}

class Object{
  constructor(name, where) {
    this.name = name;
    this.where = where;
  }
}

class Location {
  constructor(name) {
    this.name = name;
  }
}

class LoContainer extends Location {
  constructor(name,open) {
    super(name);
    this.open = false;
  }

  get state() {
    return this.open;
  }

  open() {
    this.open = true;
    console.log("{this.name} is open.");
  }

  close() {
    this.open = false;
    console.log("{this.name} is closed.");
  }
}

class obContainer extends Object {
  constructor(name,open) {
    super(name);
    this.open = false;
  }

  get state() {
    return this.open;
  }

  open() {
    this.open = true;
    console.log("{this.name} is open.");
  }

  close() {
    this.state = false;
    console.log("{this.name} is closed.");
  }
}


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

function loadCommands(){
  let objectList=JSON.stringify(commands)
  alert(objectList);
}

function showCode(){
  let objectList=JSON.stringify(program)
  alert(objectList);
}

function addCommand(){
    let cWord = prompt("Command?");
    let cTakes = prompt("Argument?");
    let cRules = prompt("Rules?");
    let cResult = prompt("Result?");
    let newCommand=[cWord,cTakes,cRules,cResult];
    commands.push(newCommand);
  }

function initialize(){
  let title=prompt("Name of program?");
  let coder=prompt("Name of coder?");
  let nC = new Code(1, title+" by "+coder);
  return nC;
}

function addLineByParts(){
    let lineNumber = prompt("Line number?");
    let newCommand = prompt("Command?");
    let newArgument = prompt("Argument?");
    let newLine=[lineNumber,newCommand+"("+newArgument+");"];
    commands.push(newLine);
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

program.push(initialize());
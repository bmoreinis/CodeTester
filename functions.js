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

function checkLastLine(){
  let lineToCheck = program[program.length - 1];
  //if (lineToCheck[lineToCheck.length - 1] ==";"){
  if (lineToCheck[1]=="hold"){
    if (right.free()=false){
      if (left.free()){
        left.holding=lineToCheck[2];
        alert("Left is now holding "+lineToCheck[2])
      }
      else {
        alert("Left hand is not empty.  Cannot hold new object.  Line was removed.");
        program.pop();
      }
    }
    else {
      alert("Right hand is not holding anything, so there is nothing to put in left hand.  Line was removed.");
      program.pop();
    }
  }
/*
  else {
    alert("Line did not end in semicolon and was removed. Re-enter properly.");
    program.pop();
  }
*/
}


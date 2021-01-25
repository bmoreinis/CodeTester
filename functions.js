/* Functions */

function initialize(){
  let title=prompt("Title of program?");
  let coder=prompt("Name of coder?");
  let nC = new Code(10,title+" by "+coder);
  program.unshift(nC);
  console.log(JSON.stringify(program[0]));
}

function start() {
  var alertArea = document.getElementById("alertArea");
  alertArea.innerHTML="Welcome to BabySister!  If you don't know what this is and want to, I have a one-hour montage of recordings from various classes.<a href=\"mailto:bmoreinis@slprep.org\">Email me</a> for a link.";
}

function hideAlert() {
  var alertArea = document.getElementById("alertArea");
  alertArea.innerHTML="";
  alertArea.style.display = "none";
}

function loadDocs(){
  while (commandDocs.length) {
    commandDocs.pop();
  }
  for(let c=0;c<commandDocValues.length;c++){
    let newCommand=new CommandDoc(commandDocValues[c][0],commandDocValues[c][1],commandDocValues[c][2],commandDocValues[c][3]);
    commandDocs.push(newCommand);
  }
  showCommands();
}

function showClasses(){
  var alertArea = document.getElementById("alertArea");
  alertArea.style.display = "block";
  alertArea.innerHTML="<p style=\"text-align:center;\"><input type = \"button\" style=\"background-color:yellow;\" onclick = \"hideAlert()\" value = \"Hide Documentation\"></p>"+classDocs;
}

function showCommands(){
  var alertArea = document.getElementById("alertArea");
  let newCommand="";
  let commandString="<p style=\"text-align:center;\"><input type = \"button\" style=\"background-color:yellow;\" onclick = \"hideAlert()\" value = \"Hide Documentation\"></p>";
  commandString+="<dl>";
  for(let i=0;i<commandDocs.length;i++){
    commandString+=commandDocs[i].toString();
  }
  commandString+="</dl>";
  alertArea.style.display = "block";
  alertArea.innerHTML=commandString;
}

function showCode(lineNumbers){
  var code = document.getElementById("code");
  lnNumbers=lineNumbers;
  programOutput="\n";
  program.sort((a, b) => (parseInt(a.lineNum) > parseInt(b.lineNum)) ? 1 : parseInt((a.lineNum) === parseInt(b.lineNum)) ? ((a.command > b.command) ? 1 : -1) : -1 )
  for (let i=0;i<program.length;i++){
    programOutput+="<p>"+program[i].toString()+"</p>";
  }
  code.innerHTML=programOutput;
}

function addCommand(){
  let rules=[], result=[];
  let cWord = prompt("Command?");
  let cTakes = prompt("Argument?");
  let cRules = prompt("Rules?");
  rules.push(cRules);
  let cResult = prompt("Result?");
  result.push(cResult);
  let newCommand = new CommandDoc(cWord,cTakes,rules,result);
  commandDocs.push(newCommand);
  }

function addLineByParts(){
    lineNum=(program.length+1)*10;
    let lineCommand = prompt("Command?");
    let lineArgument = prompt("Argument?");
    let nCL = new Command(lineNum,lineCommand,lineArgument);
    program.push(nCL);
}

function addLineString(){
  let lineNum=0,lineCommand=null,lineArgument=null,lChar=0,startChar=0;
  let lineString=prompt("Enter line starting with line number. Single space after number.");
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
  let nCL = new Command(lineNum,lineCommand,lineArgument);
  program.push(nCL);
  showCode();
}

function delLine(){
    let lNum = prompt("Line Number?");
    let found=false;
    console.log("program length = "+program.length);
    for(let pLine=0;pLine<program.length;pLine++){
      if(program[pLine].lineNum==lNum){
        console.log("Found line "+lNum);
        found=true;
        program.splice(pLine,1);
      }
      else {
        console.log(program[pLine].lineNum+" # "+lNum);
      }
    }
    if(found=false){
      console.log("Cound not find line "+lNum);
    }
    else {
      showCode(true);
    }
}

function delCode(){
  let lines = program.length;
  program.splice(0,lines);
  code.innerHTML="Code Cleared.";
}
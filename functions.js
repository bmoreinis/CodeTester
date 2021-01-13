/* Functions */

function initialize(){
  let title=prompt("Title of program?");
  let coder=prompt("Name of coder?");
  let nC = new Code(10,title+" by "+coder);
  program.unshift(nC);
  console.log(JSON.stringify(program[0]));
}

function start() {
  var code = document.getElementById("code");
  code.innerHTML="Welcome to BabySister!  If you don't know what this is and want to, I have a one-hour montage of recordings from various classes.<a href=\"mailto:bmoreinis@slprep.org\">Email me</a> for a link.";
}

function loadDocs(){
  for(let c=0;c<commandDocValues.length;c++){
    let newCommand=new CommandDoc(commandDocValues[c][0],commandDocValues[c][1],commandDocValues[c][2],commandDocValues[c][3]);
    commandDocs.push(newCommand);
  }
  showCommands();
}

function showCommands(){
  var code = document.getElementById("code");
  let newCommand="";
  let commandString="<dl>";
  for(let i=0;i<commandDocs.length;i++){
    commandString+=commandDocs[i].toString();
  }
  commandString+="</dl>";
  code.innerHTML=commandString;
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
    let lineNum = prompt("Line number?");
    lineNum=parseInt(lineNum);
    let lineCommand = prompt("Command?");
    let lineArgument = prompt("Argument?");
    let nCL = new Command(lineNum,lineCommand,lineArgument);
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
  let nCL = new Command(lineNum,lineCommand,lineArgument);
  program.push(nCL);
  showCode();
}
/* Check Code */

function checkLine(line){
  console.log("Checking line "+line+" ...");
  console.log("Line value is: "+ JSON.stringify(program[line]));
  let command = program[line].command;
  let argument = program[line].argument;
  if (command=="hold"){
    if (right.free==false){
      if (left.free){
        left.holding=argument;
        console.log("Line parses. Hooray!")
        console.log("STATUS: left hand is now holding "+argument+ " and right hand is free.");
      }
      else {
        console.log("Left hand is not empty.  Cannot hold new object.  Line was removed.");
        program.pop();
      }
    }
    else {
      console.log("Right hand is not holding anything, so there is nothing to put in left hand. Line was removed.");
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
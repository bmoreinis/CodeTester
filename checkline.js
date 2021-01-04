/* Check Code */

function checkLine(line){
  console.log("Checking line "+line+" ...");
  console.log("Line value is: "+ JSON.stringify(program[line]));
  let command = program[line].command;
  console.log("Command = "+command);
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
  if (command=="get"){
    if (right.free==true){
      if (objects.includes(argument)){
        right.holding=argument;
        console.log("Line parses. Hooray!")
        console.log("STATUS: right hand is now holding "+argument+ ".");
      }
      else {
        console.log(argument+" is not listed as one of our kitchen objects.  Line was removed.");
        program.pop();
      }
    }
    else {
      console.log("Right hand is holding "+right.holding+" so you can't get the "+argument+" until you shift the "+right.holding+" to your left hand with a HOLD command. Line was removed.");
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
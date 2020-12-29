/* Runtime Execution */


start();

var left = new Hand("left");
var right = new Hand("right");
left.holding = "slice";
isEmpty(left);

var pbj = new Object("peanutButterJar","pantry",true);
console.log("is it open?");
isOpen(pbj);

pbj.open = true; //works
console.log("is it open now?");
isOpen(pbj);// works

var nCL = new CommandLine(20,"open","peanutButterJar");
console.log("Is there an argument in the new command?");
console.log('argument' in nCL);
/* Runtime Execution */
start();

var pbj = new Object("peanutButterJar","pantry",true);
console.log(pbj.isContainer);

var nCL = new CommandLine(20,"open","peanutButterJar");
console.log('argument' in nCL);
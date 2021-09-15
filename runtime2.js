start();

/* tests */
var counter = new Location("counter");
counter.log();
var pantry = new CLocation("pantry");
pantry.log();
var breadBag = new CObject("breadBag","counter");
breadBag.log();
var slice = new Object("slice","breadBag");
slice.log();
var slice = new Object("slice","breadBag");
slice.log();
var left = new Hand("left");
left.log();
var right = new Hand("right");
right.log();
console.log("Is right hand free?");
console.log(right.free);
var peanutButterJar = new CObject("peanutButterJar","pantry");
peanutButterJar.log();
var sister = new Sister("Ariana","kitchen");
sister.log();
// Hand Status //
//status of left hand on creation


// add commands
var nCL = new Code("5","Get Spreadables from Pantry");
program.push(nCL);
var nCL = new Command("10","goTo","pantry");
program.push(nCL);
nCL.log();
sister.location=pantry.name;
nCL = new Command("20","open","pantry");
program.push(nCL);
nCL.log();
pantry.open=true;
nCL = new Command("30","get","peanutButterJar");
program.push(nCL);
nCL.log();
right.holding = peanutButterJar.name;
console.log("Is right hand free now?");
console.log(right.free);
console.log("What is right hand holding?");
console.log(right.holding);
nCL = new Command("40","hold","peanutButterJar");
program.push(nCL);
nCL.log();
left.holding=peanutButterJar.name;
right.holding=null;
console.log("is peanutButterJar open?");
console.log(peanutButterJar.open);
nCL = new Command("50","open","peanutButterJar");
program.push(nCL);
nCL.log();
peanutButterJar.open = true; 
console.log("is peanutButterJar open now?");
console.log(peanutButterJar.open);

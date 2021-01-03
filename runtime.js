

/* Runtime Execution */

/* Globals */
var ln = 0;
var program=[];
var locations=[];
var objects=[];
var commandDocs = [];
var lnNumbers=false;
var objects=["butterKnife","breadKnife","spoon", "plate","slice","peanutButter","jelly","peanutButterJar", "jellyJar","fridge","pantry","cubboard","breadBox","breadBag","drawer"];
var spreadables=["peanutButter","jelly","mayonnaise","butter","creamCheese","nutella"];
var containers=["peanutButterJar", "jellyJar","fridge","pantry","cubboard","breadBox","breadBag","drawer"];
var locations=["pantry","cupboard","fridge","counter"];
var buttons = document.getElementById("buttons");
var code = document.getElementById("code");
var instructions = document.getElementById("instructions");
var alertArea = document.getElementById("alert-area");
var playButton = document.getElementById("play");
var alertBox = document.createElement("dialog");

/* Command definitions */
var commandDocValues= [["goTo","Location",["none"],["Sister.location = location."]],["open","CLocation",["CLocation.open = false", "right.free = true"],["CLocation.open = true"]],["close","CLocation",["CLocation.open = false", "right.free = true"],["CLocation.open = true"]],["open","CObject",["CObject.open = false", "right.free=true", "left.holding = Cobject"],["CObject.open = true"]],["close","CObject",["CObject.open = true", "right.free=true", "left.holding = Cobject"],["CObject.open = false"]],["get","Object",["Object.location = Sister.location.", "If Sister.location = CLocation, CLocation.open = true.", "right.free = true."],["Object is in right hand."]],["put","Object",["Right hand must hold object", "BS must be at open location."],["Object is in location.", "Right hand is free."]],["hold","Object",["Right hand must hold object.", "Left hand must be free."],["Object is in Left hand.", "Right hand is free."]],["take","Object",["Object is in left hand.", "Right hand is free."],["Object is in right hand."]],["scoop","Object",["Object must be spreadable.", "Open container is in Left hand.", "Knife is in right hand."],["Knife holds spread to coat 1 slice."]],["spread","Object",["Knife is in right hand after scooping spreadable object.", "Argument is spreadable object from scoop command", "Left hand is steadying a slice."],["Slice is coated with spreadable object.", "Knife is clean."]],["alignFaceDown","Object",["Coated slice is in right hand.", "Target slice is on plate, coated side face up."],["Coated slice from right hand is aligned face down over coated slice face up on plate.", "Sandwich is now complete."]]];


start();

/* tests */
console.log("Creating test object.....");
var counter = new Location("counter");
var pantry = new CLocation("pantry");
var breadBag = new CObject("breadBag","counter");
var slice = new Object("slice","breadBag");
var left = new Hand("left");
var right = new Hand("right");
var peanutButterJar = new CObject("peanutButterJar","pantry");

// Hand Status //
//status of left hand on creation
console.log("Is right hand free?");
console.log(right.free);
// add slice to left Hand
right.holding = peanutButterJar;
// show contents of left hand
console.log("Is right hand free now?");
console.log(right.free);

//Container Status //
// show state of peanutButterJar

console.log("is peanutButterJar open?");
console.log(peanutButterJar.open);
// set open peanutButterJar
peanutButterJar.open = true; //works
console.log("is peanutButterJar open now?");
console.log(peanutButterJar.open);

// add command and check
var nCL = new Code("5","Get Spreadables from Pantry");
program.push(nCL);
var nCL = new Command("10","goTo","pantry");
program.push(nCL);
nCL = new Command("20","open","pantry");
program.push(nCL);
nCL = new Command("30","get","peanutButterJar");
program.push(nCL);
nCL = new Command("40","hold","peanutButterJar");
program.push(nCL);
nCL = new Command("50","get","jellyJar");
program.push(nCL);
lnNumbers=true;
console.log("Loaded: "+program[1]);
checkLine(program.length-1);
var sister = new Sister("kitchen");
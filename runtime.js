

/* Runtime Execution */

/* Globals */
var ln = 0;
var program=[];
var locations=[];
var objects=[];
var lnNumbers=false;
var objects=["butterKnife","breadKnife","spoon", "plate","slice","peanutButter","jelly","peanutButterJar", "jellyJar","fridge","pantry","cubboard","breadBox","breadBag","drawer"];
var spreadables
var containers=["peanutButterJar", "jellyJar","fridge","pantry","cubboard","breadBox","breadBag","drawer"];
var locations=["pantry","cupboard","fridge","counter"];
var buttons = document.getElementById("buttons");
var code = document.getElementById("code");
var instructions = document.getElementById("instructions");
var alertArea = document.getElementById("alert-area");
var playButton = document.getElementById("play");
var alertBox = document.createElement("dialog");

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
var nCL = new Command("20","hold","peanutButterJar");
program.push(nCL);
lnNumbers=true;
console.log("Loaded: "+program[1]);
checkLine(program.length-1);
var sister = new Sister("kitchen");
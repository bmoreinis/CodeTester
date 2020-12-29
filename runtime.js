

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
//status of left hand on creation
var counter = new Location("counter");
var pantry = new CLocation("pantry");
var breadBag = new CObject("breadBag","counter");
var slice = new Object("slice","breadBag");
var left = new Hand("left");
console.log("Is left hand free?");
console.log(left.handFree);
// add slice to left Hand
left.holding = slice;
// show contents of left hand
console.log("Is left hand free?");
console.log(left.handFree);
// show state of peanutButterJar
var peanutButterJar = new Object("peanutButterJar","pantry");
console.log("is peanutButterJar open?");
console.log(peanutButterJar.open);
// set open peanutButterJar
peanutButterJar.open = true; //works
console.log("is peanutButterJar open now?");
console.log(peanutButterJar.open);
// add command and check
var nCL = new CommandLine(20,"open","peanutButterJar");
checkLastLine();

var sister = new Sister("kitchen");
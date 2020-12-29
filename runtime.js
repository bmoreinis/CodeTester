

/* Runtime Execution */

/* Globals */
var ln = 0;
var program=[];
var locations=[];
var objects=[];
var lnNumbers=false;
var containers=["peanutButterJar", "jellyJar","fridge","pantry","cubboard","breadBox","breadBag","drawer"];
var locations=["pantry","cupboard","fridge","counter"];
var buttons = document.getElementById("buttons");
var code = document.getElementById("code");
var instructions = document.getElementById("instructions");
var alertArea = document.getElementById("alert-area");
var playButton = document.getElementById("play");
var alertBox = document.createElement("dialog");

start();

var left = new Hand("left");
var right = new Hand("right");
var sister = new Sister(left,right,"kitchen");

left.holding = "slice";
isEmpty(left);
isEmpty(sister.left);

var pbj = new Object("peanutButterJar","pantry",true);
console.log("is it open?");
isOpen(pbj);

pbj.open = true; //works
console.log("is it open now?");
isOpen(pbj);// works

var nCL = new CommandLine(20,"open","peanutButterJar");
console.log("Is there an argument in the new command?");
console.log('argument' in nCL);

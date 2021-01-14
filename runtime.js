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
var commandDocValues= [["goTo","Location",["none"],["Sister.location = location."]],["open","CLocation",["CLocation.open = false", "right.free = true"],["CLocation.open = true"]],["close","CLocation",["CLocation.open = true", "right.free = true"],["CLocation.open = false"]],["open","CObject",["CObject.open = false", "right.free=true", "left.holding = Cobject"],["CObject.open = true"]],["close","CObject",["CObject.open = true", "right.free=true", "left.holding = Cobject"],["CObject.open = false"]],["get","Object",["Object.location = Sister.location.", "If Sister.location = CLocation, CLocation.open = true.", "right.free = true."],["Object is in right hand."]],["put","Object, Target location",["Object is in right hand", "BS must be at open location."],["Object is at Target location.", "Right hand is free."]],["hold","Object",["Object is in right hand.", "Left hand must be free."],["Object is in Left hand.", "Right hand is free."]],["scoop","Object",["Object must be spreadable.", "Open container is in Left hand.", "Knife is in right hand."],["Knife has enough spread to coat 1 slice."]],["spread","Object, Target Slice",["Knife is in right hand after scooping spreadable object.", "Argument is spreadable object from scoop command", "Left hand is free to steady the slice."],["Target Slice is coated with spreadable object.", "Knife is clean."]],["placeOver","Object",["Coated slice is in right hand.", "Target slice is on plate, coated side face up."],["Coated slice from right hand is aligned face down over coated slice face up on plate.", "Sandwich is now complete."]]];

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


function loadCommands(){
  let newCode = [["goTo","cupBoard"],["get","plate"],["goTo","counter"],["put","plate"],["open","drawer"],["get","knife"],["open","breadBag"],["get","slice"],["hold","slice"],["get","slice"],["goTo","plate"],["put","slice"],["put","slice"],["goTo","breadBag"],["close","breadBag"],["goTo","pantry"],["open","pantry"],["get","peanutButterJar"],["hold","peanutButterJar"],["get","jellyJar"],["goTo","counter"],["put","jellyJar"],["open","peanutButterJar"],["get","knife"],["scoop","peanutButter"],["put","peanutButterJar"],["spread","slice"],["close","peanutButterJar"],["get","jellyJar"],["hold","jellyJar"],["open","jellyJar"],["get","knife"],["scoop","jelly"],["spread","slice"],["placeOver","slice"],["eat","sandwich"]];
  for (i=0;i<newCode.length;i++){
    lineNum=((i+2)*10);
    command=newCode[i][0];
    argument=newCode[i][1];
    nCL = new Command(lineNum,command,argument);
    program.push(nCL);
    nCL.log();
  }
}
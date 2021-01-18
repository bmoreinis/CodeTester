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
var commandDocValues =  [["goTo","Location",["Argument is a Location."],["Sister is at Location \(Sister.location = Location\)."]],["open","CLocation",["Argument is a CLocation \(Container Location\).","CLocation is closed \(CLocation.open = false\).", "Right hand is free \(Right.free = true\)."],["CLocation.open = true."]],["close","CLocation",["CLocation.open = true.", "Right.free = true."],["CLocation is closed \(CLocation.open = false\)."]],["open","CObject",["Argument CObject is a Container Object.","CObject.open = false.", "right.free = true.", "Left hand is holding CObject \(left.holding = CObject\)"],["CObject.open = true."]],["close","CObject",["CObject.open = true.", "Right.free = true.", "left.holding = Cobject."],["CObject.open = false."]],["get","Object",["Object.location = Sister.location.", "CLocation.open = true.", "Right.free = true."],["Object is in right hand \(Right.holding = Object\)."]],["put","Object, Location",["Right.holding = Object.", "BS is at Location.","If Location is CLocation, Location is open."],["Object.location is Location.", "Right hand is free."]],["hold","Object",["Right.holding = Object.", "Left.free = true."],["Left.holding = Object.", "Right.free = true."]],["scoop","CObject",["Argument CObject is a Container Object.", "CObject contains spread \(SObject\).","Left.holding = CObject.", "CObject.open = true.", "Right.holding = knife."],["Knife has enough SObject to coat 1 slice."]],["spread","SObject, Target Slice",["Right.holding = knife.", "Knife is coated with SObject.", "Left.free = true."],["Left hand is steadying Target Slice.","Target Slice is coated with SObject.", "Knife is clean now."]],["placeOver","Object",["Coated slice is in right hand.", "Target slice is on plate.","If target is coated, coated side is face up."],["Slices are aligned.","Coated side(s) are on inside.","Uncoated sides are on outside.", "Sandwich is now complete."]]];

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
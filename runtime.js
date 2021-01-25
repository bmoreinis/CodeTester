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

/* Class definitions */
var classDocs = "<h4>Classes</h4><p>BabySister creates a world of Objects and Locations. Objects are introduced as needed and then used with consistency, so call a butterKnife a knife unless you want to distinguish between breadKnife and butterKnife. There is no pre-mixed peanutButterAndJelly.</p><p> Some Objects \(like jars\) and Locations \(like a pantry\) are Containers.  A Container Location is called a CLocation; a Container Object is written CObject. Some Objects are Spreadable \(SObject\). </p><p>A Location has a name and a container property.  If its .container value is true, it is a CLocation. A CLocation has an additional property .open, which can be true \(it is open\) or false \(it is closed\).</p><p>Objects and CObjects also have container and location properties.  Object.location = pantry would be true for a plate until it is moved. Objects are moved by Hands. Our program initializes by creating two Hands, with names left and right. A Hand has a holding property \(left.holding = peanutButterJar\).</p><p>There is also a Sister object, with a name, a location, a hunger level and a frustration level. These levels will be used for gamification, but are not currently developed. When a new Sister is created, it is given a location of kitchen.</p><p>The BabySister language is also object-oriented, with each line of code as an object with a line number, a command, and an argument.  The Code class is a block comment \(argument = null\), and the Command class has a command and an argument. Each of these have .toString properties that control how they are displayed.</p><p>CommandDoc is an object of documentation, and it, too, is object oriented.  Each CommandDoc has a command, an argument \(expressed as an object class, or two\), a list of rules \(the JavaScript version of RepOK\) and a list of results \(how the world changes after the command is executed\).</p>";

/* Command definitions */
var commandDocValues =  [["goTo","Location",["Argument is a Location."],["Sister is at Location \(Sister.location = Location\)."]],["open","CLocation",["Argument is a CLocation \(Container Location\).","CLocation is closed \(CLocation.open = false\).", "Right hand is free \(Right.free = true\)."],["CLocation.open = true."]],["close","CLocation",["CLocation.open = true.", "Right.free = true."],["CLocation is closed \(CLocation.open = false\)."]],["open","CObject",["Argument CObject is a Container Object.","CObject.open = false.", "right.free = true.", "Left hand is holding CObject \(left.holding = CObject\)"],["CObject.open = true."]],["close","CObject",["CObject.open = true.", "Right.free = true.", "left.holding = Cobject."],["CObject.open = false."]],["get","Object",["Object.location = Sister.location.", "CLocation.open = true.", "Right.free = true."],["Object is in right hand \(Right.holding = Object\)."]],["put","Object, Location",["Right.holding = Object.", "Object.location = Sister.location.","If Location is CLocation, Location is open."],["Object.location is Location.", "Right hand is free."]],["hold","Object",["Right.holding = Object.", "Left.free = true."],["Left.holding = Object.", "Right.free = true."]],["scoop","CObject",["Argument CObject is a Container Object.", "CObject contains spread \(SObject\).","Left.holding = CObject.", "CObject.open = true.", "Right.holding = knife."],["Knife has enough SObject to coat 1 slice."]],["spread","SObject, Target Slice",["Right.holding = knife.", "Knife is coated with SObject.", "Left.free = true."],["Left hand is steadying Target Slice.","Target Slice is coated with SObject.", "Knife is clean now."]],["placeOver","Object",["Coated slice is in right hand.", "Target slice is on plate.","If target is coated, coated side is face up."],["Slices are aligned.","Coated side(s) are on inside.","Uncoated sides are on outside.", "Sandwich is now complete."]]];

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
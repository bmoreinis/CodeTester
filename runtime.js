/* Runtime Execution */

/* Globals */
var ln = 0;
var program=[];
var locations=[];
var objects=[];
var lnNumbers=false;
var commandDocs=[];
var objects=["butterKnife","breadKnife","spoon", "plate","slice","peanutButter","jelly","peanutButterJar", "jellyJar","fridge","pantry","cubboard","breadBox","breadBag","drawer"];
var spreadables=["peanutButter","jelly","mayonnaise","butter","creamCheese","nutella"];
var containers=["peanutButterJar", "jellyJar","fridge","pantry","cubboard","breadBox","breadBag","drawer"];
var locations=["pantry","cupboard","fridge","counter"];
/* Globals */
var buttons = document.getElementById("buttons");
var code = document.getElementById("code");
var instructions = document.getElementById("instructions");
var alertArea = document.getElementById("alert-area");
var playButton = document.getElementById("play");
var alertBox = document.createElement("dialog");

/* Command Documentation */
commandDocString='[{"command":"close","argument":"CObject","rules":["CObject.open = true.","Right.free = true.","left.holding = Cobject."],"result":["CObject.open = false."]},{"command":"get","argument":"Object","rules":["Object.location = Sister.location.","CLocation.open = true.","Right.free = true."],"result":["Object is in right hand (Right.holding = Object)."]},{"command":"get(multiple)","argument":"Object,Quantity","rules":["Object.location = Sister.location.",,"Quantity(second argument) of objects (first argument) is present.","CLocation.open = true.","Right.free = true."],"result":["Quantity of objects specified is in right hand (Right.holding = Object,Quantity)."]},{"command":"grill","argument":"Object","rules":["burner is on","griddle is on burner","sandwich is on plate","spatula is in right hand"],"result":["sandwich is grilled, both sides","sandwich is on griddle"]},{"command":"hold","argument":"Object","rules":["Right.holding = Object.","Left.free = true."],"result":["Left.holding = Object.","Right.free = true."]},{"command":"goTo","argument":"Location","rules":["Argument is a Location."],"result":["Sister is at Location (Sister.location = Location)."]},{"command":"open","argument":"CObject","rules":["Argument CObject is a Container Object.","CObject.open = false.","right.free = true.","Left hand is holding CObject (left.holding = CObject)"],"result":["CObject.open = true."]},{"command":"open","argument":"CLocation","rules":["Argument is a CLocation (Container Location).","CLocation is closed (CLocation.open = false).","Right hand is free (Right.free = true)."],"result":["CLocation.open = true."]},{"command":"placeOver","argument":"Object","rules":["Source slice is in right hand.","Target slice is on plate.","If target is coated, coated side is face up."],"result":["Slices are aligned.","Coated side(s) are on inside.","Uncoated sides are on outside.","Sandwich is now complete."]},{"command":"put","argument":"Object","rules":["Right.holding = Object.","Object.location = Sister.location.","If Location is CLocation, Location is open."],"result":["Object.location is Location.","Right hand is free."]},{"command":"scoop","argument":"CObject","rules":["Argument CObject is a Container Object.","CObject contains spread (SObject).","Left.holding = CObject.","CObject.open = true.","Right.holding = knife."],"result":["Knife has enough SObject to coat 1 slice."]},{"command":"spread","argument":"Target Slice","rules":["Right.holding = knife.","Argument is leftSlice or rightSlice","Knife is coated with SObject.","Left.free = true."],"result":["Left hand is steadying Target Slice.","Target Slice is coated with SObject.","Knife is clean now."]},{"command":"steady","argument":"Object","rules":["Left.free = true.","Object is at babySister Location"],"result":["Left hand is steadying Object."]},{"command":"wash","argument":"Object","rules":["Right.holding = Object.","babySister.Location = sink."],"result":["Object is clean."]}]';

/* Command definitions */
var commandDocValues =  [["close","CObject",["CObject.open = true.", "Right.free = true.", "left.holding = Cobject."],["CObject.open = false."]],["close","CLocation",["CLocation.open = true.", "Right.free = true."],["CLocation is closed \(CLocation.open = false\)."]],["get","Object",["Object.location = Sister.location.", "CLocation.open = true.", "Right.free = true."],["Object is in right hand \(Right.holding = Object\)."]],["grill","Object",["burner is on","griddle is on burner","sandwich is on plate","spatula is in right hand"],["sandwich is grilled, both sides","sandwich is on griddle"]],["hold","Object",["Right.holding = Object.", "Left.free = true."],["Left.holding = Object.", "Right.free = true."]],["goTo","Location",["Argument is a Location."],["Sister is at Location \(Sister.location = Location\)."]],["open","CObject",["Argument CObject is a Container Object.","CObject.open = false.", "right.free = true.", "Left hand is holding CObject \(left.holding = CObject\)"],["CObject.open = true."]],["open","CLocation",["Argument is a CLocation \(Container Location\).","CLocation is closed \(CLocation.open = false\).", "Right hand is free \(Right.free = true\)."],["CLocation.open = true."]],["placeOver","Object",["Source slice is in right hand.", "Target slice is on plate.","If target is coated, coated side is face up."],["Slices are aligned.","Coated side(s) are on inside.","Uncoated sides are on outside.", "Sandwich is now complete."]],["put","Object",["Right.holding = Object.", "Object.location = Sister.location.","If Location is CLocation, Location is open."],["Object.location is Location.", "Right hand is free."]],["scoop","CObject",["Argument CObject is a Container Object.", "CObject contains spread \(SObject\).","Left.holding = CObject.", "CObject.open = true.", "Right.holding = knife."],["Knife has enough SObject to coat 1 slice."]],["spread","Target Slice",["Right.holding = knife.", "Argument is leftSlice or rightSlice", "Knife is coated with SObject.", "Left.free = true."],["Left hand is steadying Target Slice.","Target Slice is coated with SObject.", "Knife is clean now."]],["stack","Object",["Object must be in right hand.", "Must be located in front of plate with at least one slice of bread as sandwich base."],["Object is stacked on sandwich base."]],["steady","Object",["Left.free = true.", "Object is at babySister Location"],["Left hand is steadying Object."]],["wash","Object",["Right.holding = Object.", "babySister.Location = sink."],["Object is clean."]]];


/* Class definitions */
var classDocs = "<h4>Classes</h4><p>BabySister creates a world of Objects and Locations. Objects are introduced as needed and then used with consistency, so call a butterKnife a knife unless you want to distinguish between breadKnife and butterKnife. There is no pre-mixed peanutButterAndJelly.</p><p> Some Objects \(like jars\) and Locations \(like a pantry\) are Containers.  A Container Location is called a CLocation; a Container Object is written CObject. Some Objects are Spreadable \(SObject\). </p><p>A Location has a name and a container property.  If its .container value is true, it is a CLocation. A CLocation has an additional property .open, which can be true \(it is open\) or false \(it is closed\).</p><p>Objects and CObjects also have container and location properties.  Object.location = pantry would be true for a plate until it is moved. Objects are moved by Hands. Our program initializes by creating two Hands, with names left and right. A Hand has a holding property \(left.holding = peanutButterJar\).</p><p>There is also a Sister object, with a name, a location, a hunger level and a frustration level. These levels will be used for gamification, but are not currently developed. When a new Sister is created, it is given a location of kitchen.</p><p>The BabySister language is also object-oriented, with each line of code as an object with a line number, a command, and an argument.  The Code class is a block comment \(argument = null\), and the Command class has a command and an argument. Each of these have .toString properties that control how they are displayed.</p><p>CommandDoc is an object of documentation, and it, too, is object oriented.  Each CommandDoc has a command, an argument \(expressed as an object class, or two\), a list of rules \(the JavaScript version of RepOK\) and a list of results \(how the world changes after the command is executed\).</p>";

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

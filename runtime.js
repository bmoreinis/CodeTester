/* Globals */
var ln = 0;
var program=[];
var locations=[];
var objects=[];
var lnNumbers=false;
var containers=["peanutButterJar", "jellyJar","fridge","pantry","cubboard","breadBox","breadBag","drawer"];
/* Runtime Execution */

start();

var pbj = new ObContainer("peanutButterJar",false);
console.log('open' in pbj);

var nCL = new CommandLine(20,"open","peanutButterJar");
console.log('argument' in nCL);
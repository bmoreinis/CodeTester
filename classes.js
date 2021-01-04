/* Classes */

/* Location, which is not a container */
class Location {

  constructor(name) {
    this.name = name;
    this.container = false;
    this.open = null;
    this.log = function () {
    console.log("Created new Location called "+this.name+".");
    };
  }

}

/* Location, which is a container */
class CLocation extends Location {

  constructor(name) {
    super();
    this.name=name;
    this.container = true;
    this.open = false;
    this.log = function () {
        console.log("Created new Container Location called "+this.name+".");
    };
    }
}

/* Object, which must be at a location and is not a container */
class Object{

  constructor(name,location) {
    this.name = name;
    this.location = location;
    this.container = false;
    this.open = null;
    this.log = function () {
      console.log("Created new Object called "+this.name+".");
    };
  }

}

class CObject extends Object {
  constructor(name,location) {
    super();
    this.name = name;
    this.location = location;
    this.container = true;
    this.open = false;
    this.log = function () {
      console.log("Created new Container Object called "+this.name+".");
    };
  }

}

/* hand, which may be holding an object */
class Hand{

  constructor(name){
    this.name = name;
    this.holding = null;
    this.log = function () {
      console.log("Created new Hand object called "+this.name+".");
    };
  }

  get free(){
    if (this.holding == null){
      return true;
    }
    else {
      return false;
    }
  }
}

/* sister, which must be at a location */
class Sister{
  
  constructor(name,location){
    this.name=name;
    this.location = location;
    this.hunger = 0;
    this.frustration = 0;
    this.log = function () {
      console.log("Created new Sister Object called "+this.name+" at the "+this.location+" location.");
    };
  }

  toString() {
    const ret ="Baby Sister is at the "+this.location+".  On a scale of 1 to 10, her hunger is "+this.hunger+" and her frustration is "+this.frustration+".";
  }
}


/* Code, which is only a comment */
class Code {
  constructor(lineNum, comment) {
    this.lineNum = lineNum;
    this.command = comment;
    this.argument = null;
    this.log = function () {
      console.log("Created new Comment at line "+this.lineNum+".");
      console.log(this.toString);
    };
  }

  toString() {
    if(lnNumbers==true) {
      const ret = "<p>"+this.lineNum + "<span class=\"tab\"></span> /* " + this.command + ' */</p>\n';
      return ret;
    }
    else {
       const ret = "<p>"+'/* ' + this.command + ' */</p>\n';
       return ret;
    }
  }
}

/* command, which inherits code but adds argument */
class Command extends Code {
  constructor(lineNum, command, argument) {
    super();
    this.lineNum=lineNum;
    this.command=command;
    this.argument = argument;
    this.log = function () {
      console.log("Created new Command at line "+this.lineNum+":");
      console.log("   "+this.toString());
    };
  }

  toString() {
    if(lnNumbers==true) {
      const ret = this.lineNum + "<span class=\"tab\"></span>" + this.command + '(' + this.argument+ ');\n';
      return ret;
    }
    else {
      const ret = this.command + '(' + this.argument+ ');\n';
      return ret;
    }
  }
}

/* CommandDoc, for storing Code Documentation */
class CommandDoc{
  
  constructor(command,argument,rules,result){
    this.command = command;
    this.argument= argument;
    this.rules = rules;
    this.result = result;
  }

  get ruleList(){
    let arrayString="";
    for(let j=0;j<this.rules.length;j++){
      arrayString+=this.rules[j]+"<br>";
    }
    return arrayString;
  }

  get resultList(){
    let arrayString="";
    for(let j=0;j<this.result.length;j++){
      arrayString+=this.result[j]+"<br>";
    }
    return arrayString;
  }

  toString() {
    const ret ="<dt><strong>"+this.command+"("+this.argument+")"+"</strong></dt><dd><em>Rules: </em>"+this.ruleList+"</dd><dd><em>Results: </em>"+this.resultList+"</dd>\n";
    return ret;
  }
}
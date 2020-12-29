/* Classes */

/* Location, which is not a container */
class Location {

  constructor(name) {
    this.name = name;
    this.container = false;
    this.open = null;
  }

}

/* Location, which is a container */
class CLocation extends Location {

  constructor() {
    super(name);
    this.container = true;
    this.open = false;
    }
}

/* Object, which must be at a location and is not a container */
class Object{

  constructor(name,location) {
    this.name = name;
    this.location = location;
    this.container = false;
    this.open = null;
  }

}

class CObject extends Object {
  constructor(name,where) {
    super(name,location);
    this.container = true;
    this.open = false;
  }

}

/* hand, which may be holding an object */
class Hand{

  constructor(name){
    this.name = name;
    this.free = true;
    this.holding = null;
  }
}

/* sister, which must be at a location */
class Sister{
  
  constructor(){
    this.location = "kitchen";
    this.hunger = 0;
    this.frustration = 0;
  }

  toString() {
    const ret ="Baby Sister is at the "+this.location+".  On a scale of 1 to 10, her hunger is "+this.hunger+" and her frustration is "+this.frustration+".";
  }
}


/* Code, which is only a comment */
class Code {
  constructor(lineNum, command) {
    this.lineNum = lineNum;
    this.command = command;
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
class CommandLine extends Code {
  constructor(lineNum, command, argument) {
    super(lineNum,command);
    this.argument = argument;
    this.rules=[];
    this.results=[];
  }

  toString() {
    if(lnNumbers==true) {
      const ret = "<p>"+this.lineNum + "<span class=\"tab\"></span>" + this.command + '(' + this.argument+ ');</p>\n';
      return ret;
    }
    else {
      const ret = "<p>"+this.command + '(' + this.argument+ ');</p>\n';
      return ret;
    }
  }
}
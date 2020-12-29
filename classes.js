/* Classes */

class Hand{
  constructor(name){
    this.name = name;
    this.holding = null;
  }
}

class Sister{
  constructor(left,right,location){
    this.left = left;
    this.right = right;
    this.location = location;
    this.hunger = 0;
    this.frustration = 0;
  }

  get sisterLeftFree(){
    if(this.left.holding = null){
      return true;
    }
    else {
      return false;
    }
  }

  get sisterRightFree(){
    if(this.right.holding = null){
      return true;
    }
    else {
      return false;
    }
  }

  toString() {
    const ret ="Baby Sister is holding "+this.left.holding+" in her left hand and "+this.right.holding+" in her right hand.  On a scale of 1 to 10, her hunger is "+this.hunger+" and her frustration is "+this.frustration+".";
  }
}



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

class Object{

  constructor(name,where,isContainer) {
    this.name = name;
    objects.push(name);
    this.where = where;
    this.container=isContainer;
    if(this.container){
      containers.push(this.name);
      this._open = false;
      console.log(containers[containers.length-1]+" is added as a container in the "+this._open+" state.");
    }
  }

  get state() {
    if(this.container){
      console.log(this.name+" open?:"+this._open);
    }
    else {
      console.log(this.name + " is not a container.");
    }
  }

  set state(open) {
    this._open = open;
    console.log(this.name +" open? "+this._open);
  }
}


class Location {

  constructor(name,isContainer) {
    this.name = name;
    locations.push(name);
    this.container=isContainer;
    if(this.container){
      this.open = false;
      containers.push(this.name);
    }
  }

  get state() {
    if(this.container){
      console.log(this.name+" open?: "+this._open);
    }
    else {
      console.log(this.name + " is not a container.");
    }
  }

  set state(open) {
    if(this.container){
      this._open = open;
      console.log(this.name +" open? "+this._open);
      }
    else {
      console.log(this.name + " is not a container.");
    }
  }
}

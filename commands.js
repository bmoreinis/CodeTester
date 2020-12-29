/* Command definitions */
var commands = [
  {
    "command": "goTo",
    "takes": "location",
    "rules": "none",
    "result": "BS is at location."
  },
  {
    "command": "open",
    "takes": "container object or container location",
    "rules": "Object is in closed state.",
    "result": "Object or location is open."
  },
   {
    "command": "close",
    "takes": "container object or container location",
    "rules": "Object is in open state.",
    "result": "Object or location is closed."
  },
  {
    "command": "get",
    "takes": "object from location",
    "rules": "Object is in current location. Container location must be open. Right hand is free.",
    "result": "Object is in right hand."
  },
  {
    "command": "put",
    "takes": "object from right hand",
    "rules": "Right hand must hold object. BS must be at open location.",
    "result": "Object is in location. Right hand is free."
  },
  {
    "command": "hold",
    "takes": "object from right hand",
    "rules": "Right hand must hold object.  Left hand must be free.",
    "result": "Object is in Left hand. Right hand is free."
  },
  {
    "command": "take",
    "takes": "object",
    "rules": "Object is in left hand. Right hand is free.",
    "result": "Object is in right hand."
  },
  {
    "command": "scoop",
    "takes": "spreadable object",
    "rules": "Open container is in Left hand. Knife is in right hand. ",
    "result": "Knife holds spread to coat 1 slice."
  },
  {
    "command": "spread",
    "takes": "spreadable object",
    "rules": "Knife is in right hand after scooping spreadable object. Left hand is steadying a slice.",
    "result": "Slice is coated with spreadable object. Knife is clean."
  },
  {
    "command": "alignFaceDown",
    "takes": "slice",
    "rules": "Coated slice is in right hand. Target slice is on plate, coated side face up.",
    "result": "Coated slice from right hand is aligned face down over coated slice face up on plate. You have a sandwich."
  }
]
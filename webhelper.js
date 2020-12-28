/* Input Area system */

function clearCode() {
  var code = document.getElementById("code");
  code.innerHTML = "";
}

/* Alert System */
function makeAlertBox(message) {
  removeAlertBox();
  alertBox = document.createElement("dialog");
  alertBox.setAttribute("id", "alertBox");
  alertBox.style.display = "block";
  alertArea.append(alertBox);
  let alertMsg = document.createElement("p");
  alertMsg.innerHTML = message;
  alertBox.appendChild(alertMsg);
  makeAlertButton("OK",removeAlertBox);
}

function makeAlertButton(message,clickAction){
  alertBox = document.getElementById("alertBox");
  console.log("Alert Box = "+alertBox.innerHTML);
  let alertButton = document.createElement("BUTTON");
  alertButton.setAttribute("class", "alertButton");
  alertBox.appendChild(alertButton);
  alertButton.innerHTML = message;
  alertButton.addEventListener("click", clickAction);
  alertButton.addEventListener("click", removeAlertBox);
}

function removeAlertBox() {
  while(alertArea.hasChildNodes()){
    alertArea.removeChild(alertArea.childNodes[0]);
  }
}

function removeButtons() {
  while(buttonArea.hasChildNodes()){
    buttonArea.removeChild(buttonArea.childNodes[0]);
  }
}

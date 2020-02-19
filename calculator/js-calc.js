// Stores previous value if any
let preVal = "";

// Stores value we are building
let newVal = "";

// Stores value to display in the entry window
let resultVal = "";

// Strore previous math operator clicked
let mathOperator = "";

// Store whether decimal has been clicked
// Only allow 1 per value entered
let decimalClicked = false;

// Will hold values we want to store in memory
let valMemStored = "";

// define functions

// Called when a number is clicked
function numButPress(num) {
  // Check if a number has been already clicked
  if (resultVal) {
    // Start a new number
    newVal = num;
    // Reset to create a new result
    resulVal = "";
  } else {
    // used to block multiple decimals
    if (num === ".") {
      if (decimalClicked != true) {
        newVal += num;
        decimalClicked = true;
      }
    } else {
      newVal += num;
    }
  }
  // Update value in entry input tag
  document.getElementById("entry").value = newVal;
}

function mathButPress(operator) {
  // Check if there was a previous calculation
  // by seeing if resultVal has a value

  // If result doesn't have a value then store
  // the current val as a previous for th next
  // calculation
  if (!resultVal) {
    preVal = newVal;
  } else {
    // If there is a current result store that as
    // the previous value entered
    preVal = resultVal;
  }

  // Restart creation of new number
  newVal = "";
  // Reset decimalClicked
  decimalClicked = false;
  // Store operator clicked
  mathOperator = operator;

  // Prepare entry for receiving new numbers
  resultVal = "";
  document.getElementById("entry").value = "";
}

function equalButPress(num) {
  // Reset decimalClicked
  decimalClicked = false;

  // convert string numbers to floats
  preVal = parseFloat(preVal);
  newVal = parseFloat(newVal);

  // Perform calculations based on stored operator
  switch (mathOperator) {
    case "+":
      resultVal = preVal + newVal;
      break;
    case "-":
      resultVal = preVal - newVal;
      break;
    case "*":
      resultVal = preVal * newVal;
      break;
    case "/":
      resultVal = preVal / newVal;
      break;
    // If equals is hit without an operator
    // leave everything  as is
    default:
      resultVal = newVal;
  }

  // Store the current value as the previous so that
  // I can expect to next value in the calculation
  preVal = resultVal;

  // Put the calculation result in the enty window
  document.getElementById("entry").value = resultVal;
}

// Clear everything except memory
function clearButPress() {
  preVal = "";
  newVal = "";
  resultVal = "";
  mathOperator = "";
  decimalClicked = false;

  document.getElementById("entry").value = "0";
}

// Store the current value in the entry window
function copyButPress() {
  valMemStored = document.getElementById("entry").value;
}

// If a value has been stored paste it in the entry
// window and assign it as the newVal
function pasteButPress() {
  if (valMemStored) {
    document.getElementById("entry").value = valMemStored;
    newVal = valMemStored;
  }
}

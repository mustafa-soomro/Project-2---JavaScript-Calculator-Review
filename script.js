let prevVal = '';
let newVal = '';
let resultVal = '';
let mathOperator = '';
// Store whether or not decimal was clicked
// (Only allow one decimal per val.) 
let decimalClicked = false;

// Hold values we want stored in memory 
let valMemStored = '';


function  numButPress(num){
    // Check if a number has already been clicked
    if(resultVal){
        // Start a new number
        newVal = num
        // Reset to create a new result
        resultVal = ''
    } else {
        // Use to block multi decimals
        if (num === '.') {
            if(decimalClicked != true){
                // Take the current value of newVal and add the character pressed
                newVal += num
                // Sets decimal check var to true, wont allow more
                decimalClicked = true
            }
        } else {
            newVal += num
        }
    }
// Update the display
document.getElementById('entry').value = newVal
}


function  mathButPress(operator){
    //Check if there was a previous calculation by seeing if resultVal has a value. If result value doesn't have a value then stor the current val as a previous for the next calculation
    if(!resultVal){
        prevVal = newVal
    }
    else {
    // If there is a current result store that as the previous value entered 
        prevVal = resultVal
    }
    // Restart creation of new number
    newVal = ''
    // Reset decimalClicked
    decimalClicked = false
    // Stores operator clicked
    mathOperator = operator
    // Prepare entry for receiving new numbers
    resultVal = ''
    document.getElementById('entry').value = ''
}  


function  equalButPress(){
    // Reset decimalClicked
    decimalClicked = false
    //Converts string numbers to floats
    prevVal = parseFloat(prevVal)
    newVal = parseFloat(newVal)
    //Perform calculations based on stored operator
    switch (mathOperator){
        case '+':
            resultVal = prevVal + newVal
            break
        case '-':
            resultVal = prevVal - newVal
            break
        case '*':
            resultVal = prevVal * newVal
            break
        case '/':
            resultVal = prevVal / newVal
            break
        // If equals is hit without an operator, leave everything as is 
        default: 
            resultVal = newVal
    }
    // Store the current value pn the previous so that I can except to next value in the calculation
    prevVal = newVal
    // Put the calculation result in the entry window
    document.getElementById('entry').value = resultVal

}

// Clears everything except set memory 
function  clearButPress(){
prevVal = '';
newVal = '';
resultVal = '';
mathOperator = '';
decimalClicked = false;
document.getElementById('entry').value = '0'
}

// Stores the current value in #entry in valMemStored
function  copyButPress(){
    valMemStored = document.getElementById('entry').value
}

//If a value has been stored, paste it in the #entry window and assign it as the newVal
function  pasteButPress(){
    if (valMemStored) {
        document.getElementById('entry').value = valMemStored
        newVal = valMemStored
    }
}

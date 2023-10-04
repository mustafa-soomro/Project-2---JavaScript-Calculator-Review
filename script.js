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
    
}


function  equalButPress(){
    
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

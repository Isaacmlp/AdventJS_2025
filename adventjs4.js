/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
  // Code here
  let decodePIN = code.split(/\[|\]/).filter(item => item.length > 0);
  let PIN = ""
  let Number = 0;
  decodePIN.forEach((item) => {    
    if (item === "<" ) {
     PIN += PIN[PIN.length-1]
    } else {
      Number = parseInt(item[0]);
      for (let i = 1; i < item.length; i++ ) {
        if (item[i] === "+") {
          Number += 1;
            if (Number > 9) {
              Number = 0;      
            }
        } else if (item[i] === "-") {
          Number -= 1;
            if (Number < 0) {
              Number = 9;
            }
        }   
      }
      PIN += Number
    }    
  })
    if (PIN.length < 4) {
      return null
    }
  return PIN
}


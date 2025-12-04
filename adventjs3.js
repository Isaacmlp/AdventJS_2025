/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
  if (size < 2) { 
    return ""
  } 
  let printedGift = "";
  let space = " ";
  
    printedGift += symbol.repeat(size);
    printedGift += "\n";
    if (size > 2 ){
      for (let j = 0; j < size - 2 ; j++) {
        printedGift += symbol + space.repeat(size - 2) + symbol +  "\n";
      }
    }
    printedGift += symbol.repeat(size);

  return printedGift
}

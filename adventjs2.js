/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
 
function manufactureGifts(giftsToProduce) {
  let manufacturedGifts = [];
  giftsToProduce.forEach((gift) => {
    for (let i = 0; i < gift.quantity; i++) {
      manufacturedGifts.push(gift.toy);
    }
  });
  return manufacturedGifts;
}

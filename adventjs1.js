/**
 * @param {string[]} gifts - The array of gifts to filter
 * @returns {string[]} An array with the unique filtered gifts
 */
function filterGifts(gifts) {
  let giftsGod = [];
  for (let i = 0; i < gifts.length; i++) {
    if (!gifts[i].includes("#")) {
      giftsGod.push(gifts[i]);
    }
  }

  return giftsGod;
}
console.log(filterGifts(["game", "poster", "gift3", "gift4", "gift5"]));

/*
function filterGifts(gifts) {
  return gifts.filter((gifts) => !gifts.includes('#'))
}
*/

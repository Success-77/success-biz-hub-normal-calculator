// export const mtnPrices = {
//   1: 4.9,
//   2: 9.8,
//   3: 14.8,
//   4: 18.5,
//   5: 23,
//   6: 28,
//   7: 32,
//   8: 37,
//   9: 41.5,
//   10: 43.5,
//   11: 48.4,
//   12: 53.3,
//   13: 58.2,
//   14: 62,
//   15: 65,
//   16: 69.9,
//   17: 74.8,
//   18: 79.7,
//   19: 83.5,
//   20: 83,
//   21: 87.9,
//   22: 92.8,
//   23: 97.7,
//   24: 101.5,
//   25: 105,
//   26: 109.9,
//   27: 114.8,
//   28: 119.7,
//   29: 123.5,
//   30: 125,
//   31: 129.9,
//   32: 134.8,
//   33: 139.7,
//   34: 143.5,
//   35: 148,
//   36: 152.9,
//   37: 157,
//   38: 161.9,
//   39: 166.5,
//   40: 167,
//   41: 170.9,
//   42: 175.8,
//   43: 180.7,
//   44: 184.5,
//   45: 188,
//   46: 192.9,
//   47: 197.8,
//   48: 202.7,
//   49: 206.5,
//   50: 202,
//   60: 245.5,
//   70: 285,
//   80: 327,
//   90: 368,
//   100: 400,
// };

export const mtnPrices = {
  1: 5.5,
  2: 10.5,
  3: 16,
  4: 20,
  5: 25,
  6: 30,
  7: 35,
  8: 40,
  10: 46,
  15: 69,
  16: 77,
  20: 89,
  25: 109,
  30: 132,
  40: 165,
  50: 202,
  100: 405,
};

// Helper function to find the cheapest combination of two package prices
function findCheapestPrice(target, prices) {
  let minPrice = Infinity; // Start with a very high number

  // Check all pairs of existing packages
  for (let i = 1; i <= target / 2; i++) {
    const firstPrice = prices[i];
    const secondPrice = prices[target - i];

    if (firstPrice !== undefined && secondPrice !== undefined) {
      const combinedPrice = firstPrice + secondPrice;
      if (combinedPrice < minPrice) {
        minPrice = combinedPrice;
      }
    }
  }

  return minPrice !== Infinity ? minPrice : null; // If no combination found, return null
}

// Fill missing prices between 1 and 50
for (let i = 1; i <= 50; i++) {
  if (mtnPrices[i] === undefined) {
    const cheapestPrice = findCheapestPrice(i, mtnPrices);
    if (cheapestPrice !== null) {
      mtnPrices[i] = cheapestPrice;
    }
  }
}

// Fill missing prices for multiples of 10 between 60 and 100
for (let i = 60; i <= 100; i += 10) {
  if (mtnPrices[i] === undefined) {
    const cheapestPrice = findCheapestPrice(i, mtnPrices);
    if (cheapestPrice !== null) {
      mtnPrices[i] = cheapestPrice;
    }
  }
}

console.log(mtnPrices);

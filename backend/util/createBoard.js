const SD = require("../SD");

function createBoard() {
  const board = {
    0: `${SD.color.black}`.repeat(2),
    1: ``,
    2: ``,
    3: ``,
    4: ``,
    5: `${SD.color.white}`.repeat(5),
    6: ``,
    7: `${SD.color.white}`.repeat(3),
    8: ``,
    9: ``,
    10: ``,
    11: `${SD.color.black}`.repeat(5),
    12: `${SD.color.white}`.repeat(5),
    13: ``,
    14: ``,
    15: ``,
    16: `${SD.color.black}`.repeat(3),
    17: ``,
    18: `${SD.color.black}`.repeat(5),
    19: ``,
    20: ``,
    21: ``,
    22: ``,
    23: `${SD.color.white}`.repeat(2),
  };

  return board;
}

module.exports = { createBoard };

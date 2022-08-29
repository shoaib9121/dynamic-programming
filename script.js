const stairCase = (n) => {
  let stairCase = [];
  // stairCase = usingTwoDArray(n);
  console.log(usingTwoDArray(n));
  stairCase = usingString(n);
  return stairCase;
};

const usingString = (n) => {
  let stairs = "";
  for (let i = 0; i < n; i++) {
    let stair = " ".repeat(n - 1 - i) + "#".repeat(i + 1) + "\n";
    stairs += stair;
  }
  return stairs;
};

const usingTwoDArray = (n) => {
  let twoDimensionalArray = [];

  for (let i = 1; i <= n; i++) {
    let row = [];
    for (let j = 1; j <= n; j++) {
      row.push("#");
    }
    twoDimensionalArray.push(row);
  }

  twoDimensionalArray.forEach((_item, i) => {
    for (let j = 0; j < n - i - 1; j++) {
      twoDimensionalArray[i][j] = " ";
    }

    // For inverse stairCase
    // for (let j = i + 1; j < n; j++) {
    //   twoDimensionalArray[i][j] = " ";
    // }
  });
  return twoDimensionalArray;
};

// console.log(stairCase(5));
console.log(stairCase(6));

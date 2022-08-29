const stairCase = (n) => {
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

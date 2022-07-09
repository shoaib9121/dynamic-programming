const gridTraveler = (m, n, memo = {}) => {
  const key = `${m},${n}`;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  let temp = gridTraveler(m - 1, n, memo) + gridTraveler(n, m - 1, memo);
  memo[key] = temp;
  return memo[key];
};

console.log(gridTraveler(2, 3)); // 2
console.log(gridTraveler(5, 3)); // 20
console.log(gridTraveler(18, 18)); // 2333606220

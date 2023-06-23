const isCharInRange = (char) => {
  const isValid = char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
  return isValid;
};

const swap = (arr, currP, lastP) => {
  let temp;
  temp = arr[currP];
  arr[currP] = arr[lastP];
  arr[lastP] = temp;
};

const isSpecialChar = (char) => {
  return !/[a-zA-z]/.test(char);
};

const reverse = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (isSpecialChar(arr[left])) {
      left++;
    } else if (isSpecialChar(arr[right])) {
      right--;
    } else {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  return arr;
};

console.log(reverse(["b", "a", "$", "c", "#"])); // ["c","a","$","b","#"]
console.log(reverse(["a", "$", "b", "#", "c"])); // ["c","$","b","#","a"]

// let binary = ''
const getBinaryRecursive = (n, binary = "") => {
  console.log(`n ${n} binary ${binary}`);

  const quotient = Math.floor(n / 2);
  const remainder = Math.floor(n % 2);
  binary += remainder;
  // binary = binary + remainder;
  if (quotient < 2) return;
  getBinary(quotient, binary);

  return binary;
};

const getBinary = (n) => {
  // let quotient = Math.floor(n / 2),
  let quotient = n,
    binary = "";

  while (quotient >= 2) {
    if (Math.floor(quotient / 2) === 2) {
      quotient = Math.floor(quotient / 2);

      binary = "10" + binary;
    } else {
      const remainder = Math.floor(quotient % 2);
      binary = binary + remainder;
      quotient = Math.floor(quotient / 2);

      // binary = remainder + binary;
    }

    // console.log(`quotient ${quotient} binary ${binary}`);
  }
  // if (quotient < 2) {
  //   binary = quotient + binary;
  // }

  return binary;
};

// console.log(getBinaryRecursive(10));
console.log(`binary of 11 ${getBinary(11)}`); // 1011
console.log(`binary of 10 ${getBinary(10)}`); // 1010

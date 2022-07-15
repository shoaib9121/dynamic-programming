const calculatePoints = (ops = "") => {
  let records = [];

  ops.forEach((item) => {
    if (!isNaN(+item)) {
      records.push(+item);
    }
    if (item === "+") {
      records.push(
        Number(
          records[records.length - 1] + Number(records[records.length - 2])
        )
      );
    } else if (item === "D") {
      records.push(Number(records[records.length - 1]) * 2);
    } else if (item === "C") {
      records.splice([records.length - 1], 1);
    }
  });
  return records.reduce((a, b) => a + b, 0);
};

let str = "5 2 C D +".split(" ");
// let str = "5 -2 4 C D 9 + +".split(" ");
// let str = "1".split(" ");
console.log(calculatePoints(str));

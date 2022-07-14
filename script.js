const linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

/**
 * Output each linked-list value
 * @param {*} list
 */
const outputSingleLinkedList = (list) => {
  console.log(list.value);
  if (list.next) {
    outputSingleLinkedList(list.next);
  }
};
outputSingleLinkedList(linkedList);

/**
 * Output each linked-list value in reverse order
 * @param {*} list
 */
let arr = [];
const outputSingleLinkedListReversed = (list) => {
  console.log(list.value);
  arr.push(list.value);
  if (list.next) {
    outputSingleLinkedListReversed(list.next);
  }
};
outputSingleLinkedListReversed(linkedList);
// arr.map(item)

/**
 * calculate sum of each linked-list value
 */
let sum = 0;
const outputSingleLinkedListValues = (list) => {
  sum += list.value;
  if (list.next) {
    outputSingleLinkedListValues(list.next);
  }
};
outputSingleLinkedListValues(linkedList);
console.log(sum);

# Coding Excercise

This repo consists of various JavaScript coding challenges. Each branch contains a different coding excercise

### Branches Links

| Problem                                                                                                                               | Complexity |
| ------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| [Flatten Array](https://github.com/shoaib9121/dynamic-programming/tree/flatten-array)                                                 | Easy       |
| [Palindromes](https://github.com/shoaib9121/dynamic-programming/tree/palindromes)                                                     | Easy       |
| [Grid Traveler](https://github.com/shoaib9121/dynamic-programming/tree/grid-traveler)                                                 | Easy       |
| [Group Anagrams](https://github.com/shoaib9121/dynamic-programming/tree/group-anagrams)                                               | Easy       |
| [Valid Parenthesis](https://github.com/shoaib9121/dynamic-programming/tree/valid-parenthesis)                                         | Easy       |
| [Linked List](https://github.com/shoaib9121/dynamic-programming/tree/linked-list)                                                     | Easy       |
| [Valid Parenthesis](https://github.com/shoaib9121/dynamic-programming/tree/valid-parenthesis)                                         | Easy       |
| [Reverse Array without special characters](https://github.com/shoaib9121/dynamic-programming/tree/reverse-without-special-characters) | Easy       |
| [Factorial](https://github.com/shoaib9121/dynamic-programming/tree/factorial)                                                         | Easy       |
| [Baseball Game](https://github.com/shoaib9121/dynamic-programming/tree/baseball-game)                                                 | Easy       |
| [Sort Even Odd Array](https://github.com/shoaib9121/dynamic-programming/tree/sort-even-odd-array)                                     | Easy       |
| [Search Insert Position](https://github.com/shoaib9121/dynamic-programming/tree/search-insert-position)                               | Easy       |
| [Decimal to Binary](https://github.com/shoaib9121/dynamic-programming/tree/decimal-to-binary)                                         | Easy       |
| [Print Staircase](https://github.com/shoaib9121/dynamic-programming/tree/print-staircase)                                             | Easy       |
| [Pascal to Sentence case](https://github.com/shoaib9121/dynamic-programming/tree/pascal-to-sentence-case)                             | Easy       |
| [Find Suspicious IDs](https://github.com/shoaib9121/dynamic-programming/tree/find-suspicious-ids)                                     | Easy       |
| [Colorize Wordle](https://github.com/shoaib9121/dynamic-programming/tree/colorize-wordle)                                             | Medium     |
| [Minimum Task Cost](https://github.com/shoaib9121/dynamic-programming/tree/minimum-task-cost)                                         | Medium     |
| [Search a Word in a Dictionary](https://github.com/shoaib9121/dynamic-programming/tree/search-word-in-dictionary)                     | Medium     |
| [Three Sum](https://github.com/shoaib9121/dynamic-programming/tree/three-sum)                                                         | Medium     |
| [River Sizes](https://github.com/shoaib9121/dynamic-programming/tree/river-sizes)                                                     | Medium     |
| [Squares of Sorted Array](https://github.com/shoaib9121/dynamic-programming/tree/squares-of-sorted-array)                             | Medium     |

## Dynamic Programming 

### Tips - Alvin's Memoization Recipe

1. Make it work

- visualize the problem as a tree
- implement the tree using recursion
- test it

2. Make it efficient

- add a memo object(as an argument to func may be)
- add a base case to return memo values
- store return values into the memo

## Complexities

The following are examples of common complexities and their Big O notations, ordered from fastest to slowest:

- Constant: `O(1)`
- Logarithmic: `O(log(n))`
- Linear: `O(n)`
- Log-linear: `O(n log(n))`
- Quadratic: `O(n^2)`
- Cubic: `O(n^3)`
- Exponential: `O(2^n)`
- Factorial: `O(n!)`

```
O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!)

if the value of n is large, (which it usually is, when we are considering Big O ie worst case), log n can be greater than 1
```

![Big-O_Complexity_Chart](https://github.com/shoaib9121/dynamic-programming/assets/24590278/ac48cddc-dce4-43e7-91a3-ee5f3322a360)

## References

[Big-O Cheat Sheet](https://www.bigocheatsheet.com/)

[Know Thy Complexities](https://paulonteri.com/dsa/ds&a/time-and-space-complexity)

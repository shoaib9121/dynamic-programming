# River Sizes

You're given a two-dimensional array (a matrix) of potentially unequal height
and width containing only `0`s and `1`s. Each
`0` represents land, and each `1` represents part of a
river. A river consists of any number of `1`s that are either
horizontally or vertically adjacent (but not diagonally adjacent). The number
of adjacent `1`s forming a river determine its size.

### Example 1

```
Input:

[
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
]
```

```
Output:

[1, 2, 2, 2, 5]

```

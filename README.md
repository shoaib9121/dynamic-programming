# Find minimum possible cost of the task

A task has been assigned to a group of employees. Each employee has an `efficiency` rating. They will be grouped in pairs so an even number of employees are required. The cost of a pair is the absolute difference of the efficiencies assigned to the employees. The cost of the task is the sum of the costs of all pairs formed. There are an odd number of employees to choose from, so one employee will not be paired. Select the employee to exclude so the task's cost is minimised.

Given `n` employees and efficiency for each employee, find a configuration of the employees such that the cost of the task is the minimum possible. Return the minimum cost as the answer.

### Example

```
efficiency = [4, 2, 8, 1, 9]
```

Using 1-based indexing, if employee 1 is excluded and the indices of the pairs are `(2, 4)` and `(3, 5)`, the cost of the task is `|2 - 1| + |8 - 9| = 2`.

This is the minimum possible cost so return output

```
Output:2
```

### Function Description

Complete the function
`findMinCost`.

`findMinCost` has the following parameter(s):

`efficiency[n]`: the efficiency of each employee

### Constraints

- 3 ≤ n < 105
- 1 ≤ efficiency[i] ≤ 109
- n is odd

# Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.

## Constraints

1. 1 <= s.length <= 104
2. s consists of parentheses only '()[]{}'

### Time and Space complexity

The time complexity is O(n) and space complexity is O(n) as well because in the worst-case scenario if we get a sequence with only opening characters (({[([{{[( we’ll push all of them to the stack

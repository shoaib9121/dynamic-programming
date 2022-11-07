# Find suspicious IDs

System logs can help with analysis of user interaction with a system such as detection of suspicious activities.

A log file is provided as a string array where each entry represents a money
transfer in the form `sender_user_id recipient_user_id amount`. Each of the values is separated by a space.

- `sender_user_id` and `recipient_user_id` both consist only of digits, are at most
  9 digits long and start with non-zero digit
- amount consists only of digits, is at most 9 digits long and starts with non-
  zero digit

Logs are given in no particular order. Write a function that returns an array of
strings denoting user_id’s of suspicious users who were involved in at least
threshold number of log entries. The id's should be ordered ascending by
numeric value.

### Example

`logs = [”88 99 200”, "88 99 300”, "99 32 100", "12 12 15”]`

`threshold = 2`

The transactions count for each user, regardless of role are:

There are two users with at least threshold = 2 transactions: 99 and 88. In
ascending order, the return array is `[’88’, ’99’]`.

Note: In the last log entry, user 72 was on both sides of the transaction. This
counts as only 7 transaction for user 72.

### Function Description

Complete the function `findSuspiciouslds`.

The function has the following parameter(s):

logs: Array<string>: each `logs[i]` denotes the ith entry in the logs

threshold: int. the minimum number of transactions that a user must have to be
included in the result

Returns:

Array<string>: an array of user id's as strings, sorted ascending by numeric value

Constraints

- 1 < n <= 10
- 1 <= threshold <= n
- The `sender_user_id`, `recipient_user_id` and `amount` contain only characters in
  the range ascii['O'-'9'].
- The `sender_user_id`, `recipient_user_id` and `amount` start with a non-zero digit.
- O < length of `sender_user_id`, `recipient_user_id`, `amount` is 9.
- The result will contain at least one element.

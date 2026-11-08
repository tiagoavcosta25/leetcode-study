https://leetcode.com/problems/contains-duplicate/

## 1. Clarify
1. Is the array guaranteed to have at least 2 elements? (doesn't matter / early return but meh)
2. Can the array contain negative numbers or zero? (meh)
3. What is the expected input size? (meh)
4. Is the array ordered? (meh)

### Answers
1. The array can be empty or contain only one element
2. The array can contain positive, negative, duplicate numbers and zero
3. The array is not necessarily ordered
4. There are no memory restrictions
5. The array can be quite big

## 2. Naive Solution
I'd use two nested loops to compare each element with every subsequent element.
If I find two equal values, I immediately return true.
If no duplicates are found after checking all pairs, I return false.

### Time complexity
O(n^2), because we're using two nested loops through the array that worse case scenario can check all pairs.

### Auxiliary space complexity
O(1), because we only use constant memory, we have no auxiliary DSs.

## 3. Bottleneck
For each element, we're repeatedly scanning the remaining array to check whether the same value exists.
We could avoid these repeated comparisons by keeping track of the values we've already seen

## 4. Choose DS
Set

### What would we store in the DS
Store the values we've already seen

### Check before insert?
We check before inserting to detect whether the current value has already appeared

## 5. Reason about complexity

### Time complexity
O(n), because worse case scenario we iterate through the full array

### Auxiliary space complexity
O(n), because worse case scenario we create a Set with almost n elements

## 6. Manual Dry Run
nums = [2, 5, 2];

i=0, seenElements = [2]
i=1, seenElements = [2,5]
i=2, condition true - early return, seenElements = [2,5]

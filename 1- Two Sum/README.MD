## 1. Clarify
1. Is the array guaranteed to contain at least 2 elements?
2. Can the array contain negative numbers? (Even though it shouldn't affect the solution)
3. Is it guaranteed to have exactly one solution?
4. If there is no solution, what should the return be?
5. Can the array have duplicate values?
6. Can we use the same element twice, or the indices have to be distinct?
7. Can the indices be returned in any order?

### Answers
1. nums can contain negatives, positives, zero and duplicates
2. Can't use the same element twice
3. There's always exactly 1 valid solution
4. Can return the 2 indices in any order
5. nums has atleast 2 elements

## 2. Naive Solution
- Two nested loops to check pairs of elements until I find two values that sum up to the target
- Avoid comparing the same pair twice or using the same element twice
- Return the indices as soon as a match is found 

### Time complexity
**O(n^2)**, because we use nested loops to compare pairs of elements.
Worse case scenario we might need to check almost every possible pair before finding the solution.

### Auxiliary space complexity
**O(1)**, we only use constant amount of extra memory, regardless of the input, no extra DS involved.

## 3. Bottleneck
For each element, we're repeatedly scanning the array to find its complement (target - nums[i])
We could avoid these repeated searches by using a hash map for constant-time lookups

## 4. Choose DS
HashMap -> Key (Complement) - Value (Index)

## 5. Reason about complexity

### Time complexity
**O(n)**, since we iterate through the loop once with no nested loops.
HashMap additions and lookups are constant time

### Auxiliary space complexity
**O(n)**, since we create a HashMap with n entries (worse case)


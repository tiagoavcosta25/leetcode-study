https://leetcode.com/problems/container-with-most-water/

1. What's the expected input size
2. Does the array contain atleast 2 elements
3. Can the array contain negative numbers
4. How exactly is the amount of water between two lines calculated?

### Answers
1. 2 <= height.length <= 100,000
2. Yes. The array always contains at least two elements, so there will always be a valid pair of lines.
3. 0 <= height[i] <= 10,000

## 2. Naive Solution
Nested loop that allows to calculate each pair of elements amount of water.
We keep a variable maxWater and we update it whenever we find a larger area.
We calculate the values by doing the min(valueA, valueB) x indexB-indexA

### Time complexity
**O(n^2)** cause for every element we'll go through every pair to calculate the water amount it can hold

### Auxiliary space complexity
**O(1)**

## 3. Bottleneck
Calculating every possible pair is the bottleneck, we can use two pointers, one at each end, and calculate the area between them, keeping a maxArea constant and updating its necessary.
For each iteration, we move the min value one index while indexA < indexB

## 4. Choose DS
No DS

## 5. Reason about complexity

### Time complexity
**O(n)**, because we loop through at most n elements

### Auxiliary space complexity
**O(1)**, constant amount of extra memory, no extra DS involved


https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

## 1. Clarify
1. What's the expected size of the array
2. Can there be equal elements inside the array?

### Answers
1. O array pode ser bastante grande.
2. Pode conter duplicados.
3. Pode conter números negativos, zero e positivos.
4. Está garantidamente sorted em non-decreasing order.
5. Existe exatamente uma solução.
6. Não podes modificar o input array.
7. Tens de utilizar O(1) auxiliary space.

## 2. Naive Solution
- For each element on the array, run a loop that starts on index+1 until we find the complement that a + b = target
- once we find it, we early return [indexA + 1, indexB + 1]

### Time complexity
O(n^2) because we have a nested loop through the array because we have a nested loop through the array

### Auxiliary space complexity
**O(1)**, we only use constant amount of extra memory, regardless of the input, no extra DS involved.

## 3. Bottleneck
Bottleneck: Looping through every comparison to find the complement of the current element

Since we know that the array is sorted, we can start looking at both ends of the array, if the value is bigger than the target, we move the right pointer  1 back, since it will decrease the overall value. If the value is smaller than the target, we move the left pointer 1 further.

This because the array is sorted and we know left and right are the smallest and biggest numbers in the array, since we know there's always one solution, if the value is bigger than the target, we know that right + random value of the array will always be bigger than the value, since left is the smallest value. So we discard it.
The opposite is also true.

We should loop while left < right

## 4. Choose DS
No DS

## 5. Reason about complexity

### Time complexity
**O(n)**, because we loop through at most n elements

### Auxiliary space complexity
**O(1)**, constant amount of extra memory, no extra DS involved


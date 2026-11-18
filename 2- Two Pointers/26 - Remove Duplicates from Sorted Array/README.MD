https://leetcode.com/problems/remove-duplicates-from-sorted-array/

## 1. Clarify
1. What is the expected input size
2. Can the array be empty
3. Can there be more than 2 of each element, for example, 3, 4, etc...
4. Can we use splice()?

### Answers
1. 1 <= nums.length <= 30,000 — no LeetCode, o array não é vazio, mas podes considerar esse edge case.
2. Os valores podem ser negativos, zero ou positivos.
3. Podem existir 2, 3, 10 ou até milhares de ocorrências do mesmo valor.
4. O array está sempre sorted in non-decreasing order.
5. Tens de modificar nums in-place, preservando a ordem dos valores únicos.
6. Apenas as primeiras k posições precisam de estar corretas.

## 2. Naive Solution
Loop through the array and create an additional array that will hold only 1 of each element.
In the end, we return the length of that final array.

### Time complexity
**O(n)** We loop through the string twice, but at most, n elements at a time

### Auxiliary space complexity
**O(n)**, we create an auxiliary array with n elements

## 3. Bottleneck
Creating an auxiliary array is unnecessary
We can have two pointers, one at the last unique value, and another one at a value that we're
analyzing
If both are equal, increment the analyzing one until its not
Once its not equal, swap the next value after the unique one with the analyzing one, and
go up one index in each
This is done until the analyzing one reaches the end of the array

## 4. Choose DS
No DS

## 5. Reason about complexity

### Time complexity
**O(n)**, because we loop through at most n elements

### Auxiliary space complexity
**O(1)**, constant amount of extra memory, no extra DS involved


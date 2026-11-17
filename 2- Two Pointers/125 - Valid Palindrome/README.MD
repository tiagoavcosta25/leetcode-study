https://leetcode.com/problems/valid-palindrome/

## 1. Clarify
1. What's the expected input size
2. Can the input be empty?
3. Are we dealing exclusively with ASCII alphanumeric chars, or should we support Unicode letters and digits?
(ASCII só contem letras numeros e alguns simbolos, nao contem acentos tipo À Â etc, sendo que Unicode tem)


### Answers
1. 1 <= s.length <= 200,000
2. A string contém apenas printable ASCII characters.
3. A comparação é case-insensitive.
4. Ignoramos todos os non-alphanumeric characters.
5. Se a string estiver vazia ou contiver apenas caracteres ignorados, devolvemos true.

## 2. Naive Solution
Create an additional string that's the actual string but reversed, then we compare them using a loop.

While creating the string, throw away non alphanumeric chars and put them in lower case.

Time complexity: O(n) -> We loop through the string twice, but at most, n elements at a time
Auxiliary Space complexity: O(n) -> we create an auxiliary string with n elements

### Time complexity
**O(n)** We loop through the string twice, but at most, n elements at a time

### Auxiliary space complexity
**O(n)**, we create an auxiliary string with n elements

## 3. Bottleneck
We don't need to create a reversed copy just to check if the string is equal from both sides, we can use two pointers at each end of the string, and loop through it.

In each iteration, we check if the current elements are alphanumeric chars, if one or both arent, we skip to the next element in line for the comparison. If they are, we directly compare them, and if they are not the same, we return false early.

We do this comparison while leftIndex < rightIndex

## 4. Choose DS
No DS

## 5. Reason about complexity

### Time complexity
**O(n)**, because we loop through at most n elements

### Auxiliary space complexity
**O(1)**, constant amount of extra memory, no extra DS involved


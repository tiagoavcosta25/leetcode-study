https://leetcode.com/problems/valid-anagram

s, t -> strings
t is anagram of s = true, false otherwise

anagram is word or phrase formed by rearranging letters of another

## 1. Clarify
1. Can the input strings contain spaces or non-alphabetic characters? If so, should they be considered when determining whether the strings are anagrams?
2. Is the comparison case-sensitive? For example, should 'A' and 'a' be considered equivalent?
3. Are the strings limited to lowercase English letters? or can they contain uppercase letters, unicode characters, or accented characters?
4. Can the strings have different sizes?
5. What is the expected string size?
6. Are the strings guaranteed to be non-empty? (Not needed)

### Answers
1. s and t only contain lowercase English letters (a-z).
2. There are no spaces, numbers, punctuation or uppercase letters.
3. They both have at least one character.
4. They can have different sizes.
5. The sizes can get up to 50,000 chars.

## 2. Naive Solution
Guard clause with early false return if strings are different sizes.
Two nested for loops, one for each string.
One auxiliary array that will contain the "used" indices for the second string (used on the second loop).
For every char of string s check if there's the same char on string T and if it wasn't used already.
If not used, store the used index on the auxiliary array.
If at the end of the second loop, there's no free equal char on the second array, early return false.
Return true at the end of the loops.

### Time complexity
O(n^3), because of the two nested loops and the lookup on the auxiliary array to check if the index was used

### Auxiliary space complexity
O(n), because of the auxiliary array to keep track of the seen indexes of the second string 

## 3. Bottleneck
The two nested loops and the lookup on the auxiliary array are the bottlenecks.
We look at every possible combination of chars to check if there's the same amount of each char in both strings.
We could remove this bottleneck by keeping a table of how many times a char appear in each string with only one pass.
We could also have a counter that would increase and decrease each time a value of a map goes to 0 or moves from 0.

## 4. Choose DS
HashMap / frequency array

### What would we store in the DS
Frequency that a character shows up in the strings

## 5. Reason about complexity

### Time complexity
O(n), because we loop through both strings at the same time

### Auxiliary space complexity
O(26) -> O(1), since we know the max amount of chars to be aware of frequency is 26 (lower case english alphabet)

## 6. Manual Dry Run
- s = abb, t = bab

- Hashmap + counter

i = 0, [a = 1, b = -1], counter = 2
i = 1, [a = 0, b = 0], counter = 0
i = 2, [a = 0, b = 0], counter = 0

return true

- Frequency Array

i = 0, [1, -1]
i = 1, [0, 0]
i = 2, [0, 0]

return true

- s = aab, t = abb

- Hashmap + counter

i = 0, [a = 0, b = 0], counter = 0
i = 1, [a = 1, b = -1], counter = 2
i = 2, [a = 1, b = -1], counter = 2

return false

- Frequency Array

i = 0, [0, 0]
i = 1, [1, -1]
i = 2, [1, -1]

return false
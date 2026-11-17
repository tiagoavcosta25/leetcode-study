https://leetcode.com/problems/group-anagrams

strs -> Array<string>

group anagrams together

ex:
Input:
["eat", "tea", "tan", "ate", "nat", "bat"]

Output:
[
["eat", "tea", "ate"],
["tan", "nat"],
["bat"]
]

## 1. Clarify
1. Is the anagram comparison case-sensitive?
2. Are empty strings allowed?
3. Are there only lower case letters from the english alphabet in the strings? No spaces, numbers, upper-case letters nor special chars?
4. Are the strings all the same length?
5. What are the expected constraints for the number of strings and the maximum length of each string?
6. The group order or order of strings inside it matters?

### Answers
1. All strings only contain lowercase English letters (a-z)
2. strs can contain from 1 up to 10,000 strings
3. each string may contain from 0 up to 100 chars
4. strings may have different sizes
5. empty strings are allowed
6. group order and the strings inside does not matter

## 2. Naive Solution
Loop through every string, order it and store the ordered copy in the same index on an auxiliary array.
Loop through the new array of strings and place the original string in the result array, comparing the strings along the way,
if the string we're going to place equals the string already placed on the result array, place it in the same array, if not, 
keep going.

### Time complexity
O(n k log k + n^2k), because on the first run we have a nested loop, looping through the string array (n) and then through the string itself
to order it (k log k), which ends up being O(array length x string order) = O(n k log k)

But later we loop through the auxiliary array of strings, and also through the result array, doing a comparison as well,
which ends up being O(array length x result array length x string length) = O(n^2 k)

### Auxiliary space complexity
O(nk), since we create an auxiliary array with all strings (n - array length, k - string length)

## 3. Bottleneck
We're ordering every string, which is wasteful.
We could fix this by creating a canonical key with the help of a frequency array. i.e frequencyArray.join(";");

We're also comparing every ordered string with every string on the result array.
We can fix this by using a hash map and placing the ordered string as the key and the value as a list of the input strings

## 4. Choose DS
Array + HashMap

### What would we store in the DS
Canonical Key (Key) - List of input Strings (Value)

## 5. Reason about complexity

### Time complexity
O(n k + n k + n) -> O(n k)
Loop through string arrays and create canonical key	O(n k) average
Build/look up string keys in the Map	O(n k) average
Collect result groups	O(n)

### Auxiliary space complexity
O(n) -> HashMap with worse case same number of elements as input array (n)

## 6. Manual Dry Run

["eat", "tan", "tea"]

Map
[eat canonical key -> ["eat"]]
[eat canonical key -> ["eat"]; tan canonical key -> ["tan"]]
[eat canonical key -> ["eat", "tea"]; tan canonical key -> ["tan"]]

result:
[
    ["eat", "tea"],
    ["tan"]
]
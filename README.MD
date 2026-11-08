## Steps to resolve DSA

1. **Clarify** - Ask questions to clarify the problem and edge cases
2. **Naive Solution** - Suggest a naive solution for the problem
3. **Bottleneck** - Find and clarify the bottleneck and how to fix it (ideally check time and auxiliary space complexity as well)
4. **Choose DS** - Choose the appropriate data structure to fix the bottleneck
5. **Reason about complexity** - Check Time and Auxiliary Space complexity of solution
6. **Implement**
7. **Catch API/type bugs**
8. **Improve to one-pass** - Ideally one pass on the input only


## Data Structures

- **`Array`**
    - `Access` by index -> `O(1)`
    - `Search` for value -> `O(n)`
    - `Push/Pop` -> `O(1)`, with worse case (full dynamic array) `O(n)`
    - `Shift/Unshift` -> `O(n)`
- **`Set`**
    - Useful to know if something already exists, doesn't take duplicates
    - `has/add/delete` -> `O(1)` average*
- **`Map`**
     - `Key` → `Value`
     - `get/set/has` -> `O(1)` average*

* Average because of **`hash collisions`** and also **`resizes`**
* **Hash collisions** -> When the result of the hash function of two elements ends in the same bucket
  - Two typical strategies
  - **`Separate Chaining`** - Each bucket stores a collection of elements - Iterate through the collection and search for the element
  - **`Open Addressing`** - Each bucket stores only one element and when there are collisions we look for another position following a rule

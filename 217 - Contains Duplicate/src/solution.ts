function containsDuplicate(nums: number[]): boolean {
    // Seen elements
    const seenElements: Set<number> = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (seenElements.has(nums[i])) {
            // Element was already seen
            return true;
        }

        // Store current element in Set
        seenElements.add(nums[i]);
    }

    return false;
}
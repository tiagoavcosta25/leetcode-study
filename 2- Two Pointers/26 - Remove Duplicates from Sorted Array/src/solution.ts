function removeDuplicates(nums: number[]): number {
    if (nums.length <= 1) {
        return nums.length;
    }

    let lastUniqueIndex = 0;
    let analyzingIndex = 1;

    while (analyzingIndex < nums.length) {
        const lastUnique = nums[lastUniqueIndex];
        const analyzing = nums[analyzingIndex];

        if (lastUnique === analyzing) {
            analyzingIndex++;
            continue;
        }

        // is different
        nums[lastUniqueIndex + 1] = analyzing;
        lastUniqueIndex++;
        analyzingIndex++;
    }

    return lastUniqueIndex + 1;
};
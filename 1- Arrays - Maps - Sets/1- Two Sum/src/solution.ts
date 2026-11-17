function twoSum(nums: number[], target: number): number[] {
    // Map of complements: Complement (K) - Index (V)
    const complements: Map<number, number> = new Map();

    for (let index = 0; index <= nums.length; index++) {
        // Check if current index is complement for processed indexes
        const indexOfComplement = complements.get(nums[index]);

        console.log("indexOfComplement: " + indexOfComplement);

        if (indexOfComplement !== undefined) {
            // Current index is complement
            return [indexOfComplement, index];
        }

        // Calculate complement of current index and store on table
        const complement = target - nums[index];
        complements.set(complement, index);
    }

    return [];
}
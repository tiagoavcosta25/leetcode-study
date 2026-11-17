function maxArea(height: number[]): number {
    let maxArea = 0;
    let indexLeft = 0;
    let indexRight = height.length - 1;

    while (indexLeft < indexRight) {
        let leftHeight = height[indexLeft];
        let rightHeight = height[indexRight];

        const min = Math.min(leftHeight, rightHeight);
        const distance = indexRight - indexLeft;

        const area = min * distance;

        if (area > maxArea) {
            maxArea = area;
        }

        if (leftHeight > rightHeight) {
            indexRight--;
        } else {
            indexLeft++;
        }
    }

    return maxArea;
};
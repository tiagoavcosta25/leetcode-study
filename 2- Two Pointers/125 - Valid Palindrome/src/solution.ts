function isPalindrome(s: string): boolean {
    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while(leftPointer < rightPointer) {
        let bothAlphanumeric = true;

        if (!isAlphanumeric(s[leftPointer])) {
            bothAlphanumeric = false;
            leftPointer++;
        }

        if (!isAlphanumeric(s[rightPointer])) {
            bothAlphanumeric = false;
            rightPointer--;
        }

        // guard against comparing if they arent both alpha numeric
        if (!bothAlphanumeric) {
            continue;
        }

        // compare
        if (s[leftPointer].toLowerCase() !== s[rightPointer].toLowerCase()) {
            return false;
        }

        // move 1 position each
        leftPointer++;
        rightPointer--;
    }

    return true;
};

function isAlphanumeric(char: string): boolean {
    return /^[a-z0-9]$/i.test(char);
}
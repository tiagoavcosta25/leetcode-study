function groupAnagrams(strs: string[]): string[][] {
    // Loop through strings O(n), n -> number of strings
    const anagramGroups: Map<string, string[]> = new Map();

    for (const str of strs) {
        // frequency array
        const frequencies = new Array<number>(26).fill(0);
        const baseCharCode = 'a'.charCodeAt(0);

        for (let i = 0; i < str.length; i++) {
            const charCode = str[i].charCodeAt(0) - baseCharCode;
            frequencies[charCode]++;
        }

        // Canonical key that represents a string
        const canonicalKey = frequencies.join(";");

        let anagramGroup = anagramGroups.get(canonicalKey);
        if (anagramGroup !== undefined) {
            // If group exists, push
            anagramGroup.push(str);
        } else {
            // If group doesn't exist, create
            anagramGroup = [str];
            anagramGroups.set(canonicalKey, anagramGroup)
        }
    }

    return Array.from(anagramGroups.values());
};
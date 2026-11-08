function isAnagram(s: string, t: string): boolean {
    // different lengths == not anagram
    if (s.length !== t.length) {
        return false;
    }

    // store char frequency
    const frequencies = new Array<number>(26).fill(0);

    // utf-16 code for a (first char)
    const baseCharCode = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        // char from s -> +1; char from t -> -1
        const sChar = s[i];
        const tChar = t[i];

        const sCharIndex = sChar.charCodeAt(0) - baseCharCode;
        frequencies[sCharIndex]++;

        const tCharIndex = tChar.charCodeAt(0) - baseCharCode;
        frequencies[tCharIndex]--;
    }

    for (let frequency of frequencies) {
        if (frequency !== 0) {
            return false;
        }
    }

    return true;
}
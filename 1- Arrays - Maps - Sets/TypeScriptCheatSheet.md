## Arrays

```typescript
const arr = [3, 1, 2];

arr.push(4);                // O(1) amortized
arr.pop();                  // O(1)
arr.includes(4);            // O(n)
arr.sort((a, b) => a-b);    // O(n log n)
```

``sort()`` modifica o array original. Sem comparator, ordena valores como string
por defeito

## Maps & Sets

```typescript
const seen = new Set<number>();

seen.add(3);        // O(1)
seen.has(3);        // O(1) - boolean: true
seen.delete(3);     // O(1)

const counts = new Map<string, number>();

counts.set("a", 2);     // O(1)
counts.get("a");        // O(1) - K | undefined: 2
counts.get("z");        // O(1) - K | undefined: undefined
counts.has("z");        // O(1) - boolean: false
```

## Strings & Alphabet Tricks

### Lowercase English alphabet -> Indices 0-25

| a | b | c | d | ... |
|---|---|---|---|-----|
| 0 | 1 | 2 | 3 | ... |

```typescript
const base = 'a'.charCodeAt(0); // 97

// Character -> Index
const index = 'c'.charCodeAt(0) - base; // 2

// Index -> Character
const char = String.fromCharCode(base + 2); // 'c'

// Frequency Array
const freq = new Array<number>(26).fill(0);
freq[index]++;
```

## Canonical key usando sorting
```typescript
const key = str.split('').sort().join('');
```

Time ``O(k log k)``

## Canonical key usando frequencies
```typescript
const key = frequencies.join('#');
```

Time ``O(26)`` para serialização, depois de contar as frequencias em ``O(k)``

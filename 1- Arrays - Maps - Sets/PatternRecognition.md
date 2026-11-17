## Pattern Recognition

- Set → existence
- Map → association
- Frequency Array → counting within a fixed alphabet
- Canonical Key → grouping equivalent elements

| Se o problema pede...                | Pensar em                     |
|--------------------------------------|-------------------------------|
| Saber se um valor já apareceu        | Set                           |
| Encontrar rapidamente um complemento | Map                           |
| Contar ocorrências de elementos      | Frequency Map / Array         |
| Agrupar elements equivalentes        | Map<Key, Group[]>             |
| Verificar duplicados                 | Set ou frequency counting     |
| Comparar strings ignorando ordem     | Sorting ou frequency counting |
| Evitar repeated linear searches      | Hash Map / Set                |

### Regra mental
Se a brute-force está constantemente a procurar um elemento num array,
considerar se um ``Hash Map`` ou ``Set`` pode transformar essa pesquisa
de ``O(n)`` em ``O(1)`` average


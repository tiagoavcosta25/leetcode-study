## Pattern Recognition

When the input is sorted, we can sometimes eliminate entire sets
of candidates based on the comparison between the current values and the target.

Isso permite-nos transformar uma solução de O(n²) numa solução de O(n)
sem utilizar memória adicional.


O key insight deste exercício é que não precisamos de construir uma normalized string para comparar caracteres válidos.
Podemos processar o input diretamente, com O(1) auxiliary space.
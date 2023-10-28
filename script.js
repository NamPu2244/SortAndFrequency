function sortAndFrequency(arr) {
  const frequencyMap = new Map();
  arr.forEach((num) => {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  });

  arr.sort((a, b) => {
    const frequencyA = frequencyMap.get(a);
    const frequencyB = frequencyMap.get(b);
    if (frequencyA === frequencyB) {
      return a - b;
    }
    return frequencyA - frequencyB;
  });

  return arr;
}

const input = [2, 3, 4, 4, 34, 6, 7, 2, 3, 7, 8, 8, 8, 7, 9, 10, 41, 8];
const output = sortAndFrequency(input);
document.getElementById("arr").innerHTML = "[" + output + "]";



export default function useRandomizer() {
  function arrayOfLen(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
      array[i] = Math.floor(Math.random() * 100 + 1);
    }
    return array;
  }
  return { arrayOfLen };
}

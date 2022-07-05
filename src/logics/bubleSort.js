import useDelay from "./useDelay";

export default function useBubleSort() {
  const { delay } = useDelay();
  async function sort(array, setArray) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          await delay(100);
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          setArray(array.slice());
        }
      }
    }
  }

  return { sort };
}

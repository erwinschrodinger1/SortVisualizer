import React, { useEffect, useState } from "react";
import Graph from "./components/Graph";
import useBubleSort from "./logics/bubleSort";
import useRandomizer from "./logics/useRandomizer";
export default function App() {
  let { arrayOfLen } = useRandomizer();
  let { sort } = useBubleSort();
  const [sliderValue, setSliderValue] = useState(50);
  const [array, setArray] = useState(arrayOfLen(sliderValue));
  useEffect(
    () => {
      setArray(arrayOfLen(sliderValue));
    }, // eslint-disable-next-line
    [sliderValue]
  );
  return (
    <>
      <input
        type="range"
        defaultValue={50}
        max={1000}
        onChange={(e) => {
          setSliderValue(e.target.value);
        }}
      />
      <h1>{sliderValue}</h1>
      <button
        onClick={() => {
          let temp = array;
          sort(temp, setArray);
        }}
      >
        Sort
      </button>
      <Graph array={array} />
    </>
  );
}

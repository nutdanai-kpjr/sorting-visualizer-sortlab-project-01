import Bar from "./bar";
import styles from "../../styles/BarSet.module.css";

import { Slider } from "../selectors/slider";
import Dropdown from "../selectors/dropdown";
import { useContext, useEffect, useState } from "react";
import { ArrayCtx } from "../../context/arrayContext";
import { useSortVisualizer } from "../../hooks/sorter_implement";

export default function BarSet() {
  //this component manage the array of numbers that will be sorted
  const { play, getName, getArray } = useSortVisualizer();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <div>
      {/* <h1>{getArray().map((i) => i.value)}</h1> */}
      <h2>{getName()}</h2>
      {/* <Dropdown
        list={getSorterNameList()}
        defaultValue={getSorterNameList()[0]}
        onChange={handleSorterChange}
      ></Dropdown> */}
      {/* <Slider
        defaultValue={numArray.length}
        onValueChanged={changeSize}
      ></Slider> */}
      <div className={styles.container}>
        {/* generate 5 bar components */}
        {getArray().map((v, i) => (
          <Bar key={i} value={v.value} color={v.color} />
        ))}
      </div>

      <button
        onClick={async () => {
          await play();
        }}
      >
        Play
      </button>
      {/* <button
        onClick={async () => {
      await handleStop();
        }}
      >
        Stop
      </button>
      <button
        onClick={async () => {
          await handleShuffle();
        }}
      >
        Shuffle
      </button>
      <button
        onClick={async () => {
          await handleGenerate();
        }}
      >
        Generate
      </button> */}
    </div>
  );
}

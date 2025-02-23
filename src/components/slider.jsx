import React, { useState, useEffect } from "react";
import styles from "./slider.module.css";
import { formatTime } from "../helpers";

export default function Slider({ pathData, setPathData }) {
  const [sliderValue, setSliderValue] = useState(0);
  const [showTooltip, setShowTooltip] = useState(true);

  const handleChange = (event) => {
    const value = Number(event.target.value); // Convert range value to number
    setSliderValue(value);
    setPathData(pathData.slice(0, value + 1)); // Update pathData to match the slider value
    setShowTooltip(false); // Hide tooltip when slider is used
  };

  useEffect(() => {
    // Reset the tooltip visibility when the slider value is reset
    setShowTooltip(true);
  }, [pathData.length]);

  return (
    <div className={styles.slider}>
      <input
        type="range"
        min={0}
        max={pathData.length - 1}
        value={sliderValue}
        onChange={handleChange}
        disabled={pathData.length === 0} // Disable slider if no data
      />
      {showTooltip && (
        <div className={styles.tooltip}>Use the slider to start racing!!!</div>
      )}
      <p>{formatTime(sliderValue + 1)}</p>
    </div>
  );
}

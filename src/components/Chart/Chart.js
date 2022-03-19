import React, { useState } from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // we are mapping over our dataPoints to transform them each into a VALUE
  // this returns just an array of all the values
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  console.log("here they are:", dataPointValues);

  const totalMaximum = Math.max(...dataPointValues);
  //spread operator pulls out all elements of array as math.max wants to compare array of objects so that they are comparable stand alone objects!
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          label={dataPoint.label}
          key={dataPoint.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};

export default Chart;

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const datapointvalues = props.datapoints.map((datapoint) => datapoint.value);
  const totalMaxValue = Math.max(...datapointvalues);
  console.log("totalMaxValue", totalMaxValue);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaxValue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

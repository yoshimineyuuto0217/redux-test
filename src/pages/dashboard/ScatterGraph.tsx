import { type ChartData } from "chart.js";
import { Line } from "react-chartjs-2";

const ScatterGraph = () => {
  const lineData: ChartData<"line"> = {
    labels: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    datasets: [
      {
        label: "各月の売り上げ",
        data: [100, 2900, 3400],
        tension: 0.6,
        hoverBackgroundColor: "red",
      },
    ],
  };
  const lineOptions = {
    scales: {
      x: { title: { display: true, text: "月", color: "red" } },
      y: {
        title: { display: true, text: "万円", color: "blue" },
        min: 0,
        max: 5000,
      },
    },
  };
  return (
    <div className=" w-full h-full bg-white absolute top-0">
      <Line data={lineData} options={lineOptions} />
    </div>
  );
};

export default ScatterGraph;

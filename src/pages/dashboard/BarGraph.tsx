import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  type ChartOptions,
  type ChartData,
  registerables,
} from "chart.js";
import { useEffect } from "react";
import { useFetchTotallingData } from "../../hooks/useFetchTotallingData";

ChartJS.register(...registerables, ChartDataLabels);

export const BarGraph = ({
  isHorizontal = true,
}: {
  isHorizontal: boolean;
}) => {
  const { fetchTotallingData, totalPiece, allProduct } =
    useFetchTotallingData();

  useEffect(() => {
    fetchTotallingData();
  }, []);

  const chartData: ChartData<"bar"> = {
    labels: allProduct,
    datasets: [
      {
        label: "今月生産した各製品の数量",
        data: totalPiece ?? [],
        backgroundColor: "skyblue",
      },
    ],
  };

  // チャートの設定
  const chartOptions: ChartOptions<"bar"> = {
    indexAxis: isHorizontal ? ("y" as const) : ("x" as const),
    plugins: {
      datalabels: {
        align: "end",
        anchor: "end",
        color: "orange",
        font: {
          size: 10,
          weight: "bold",
        },
      },
    },
    scales: {
      y: {
        display: isHorizontal,
        ticks: {
          font: {
            size: 10,
            weight: "bold",
          },
        },
      },
      x: {
        display: !isHorizontal,
        ticks: {
          font: {
            size: 10,
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <>
      <div className=" w-full h-full bg-white absolute top-0">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarGraph;

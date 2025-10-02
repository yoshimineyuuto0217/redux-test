import type { ChartData } from "chart.js";
import { useEffect, useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { useFetchTotallingData } from "../../hooks/useFetchTotallingData";
import { randomColors } from "../../utils/randomColors";

const DoughnutGraph = () => {
  const { fetchTotallingData, totalPiece, allProduct } =
    useFetchTotallingData();

  useEffect(() => {
    fetchTotallingData();
  }, [fetchTotallingData]);

  const dataColors = useMemo(
    () => randomColors(totalPiece.length),
    [totalPiece]
  );

  // ドーナツ型のデータ
  const doughnutData: ChartData<"doughnut"> = {
    labels: allProduct,
    datasets: [
      {
        label: "今月生産した製品分類",
        // パーセンテージで表示
        data: totalPiece,
        backgroundColor: dataColors,
      },
    ],
  };
  return (
    <>
      <div className="w-full h-full absolute top-0 bg-white">
        <Doughnut data={doughnutData} />
      </div>
    </>
  );
};

export default DoughnutGraph;

// 今月売り上げ金額

import type { ChartData } from "chart.js";
import { useEffect, useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { randomColors } from "../../utils/randomColors";
import { useFetchCalculationData } from "../../hooks/useFetchCalculationData";

const CalculationDoughnutGraph = () => {
  const { fetchCalculationData, totalPiece, allProduct } =
    useFetchCalculationData();

  useEffect(() => {
    fetchCalculationData();
  }, [fetchCalculationData]);

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

export default CalculationDoughnutGraph;

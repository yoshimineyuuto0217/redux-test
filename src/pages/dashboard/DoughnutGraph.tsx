import type { ChartData } from "chart.js";
import { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { randomColors } from "../../utils/randomColors";
import type { TotallingTypes } from "../../hooks/useFetchTotallingData";
import { useSelector } from "react-redux";
import type { RootState } from "../../main";

const DoughnutGraph = () => {
  const { tDate } = useSelector((state: RootState) => state.fetchCalculation);
  console.log("reduxを使用してる所で生産合計値を取得", tDate);

  const totalQuantity = tDate.map((d: TotallingTypes) => d.total_quantity);
  const allProduct = tDate.map((d: TotallingTypes) => d.product_name);

  const dataColors = useMemo(
    () => randomColors(totalQuantity.length),
    [totalQuantity]
  );

  // ドーナツ型のデータ
  const doughnutData: ChartData<"doughnut"> = {
    labels: allProduct,
    datasets: [
      {
        label: "今月生産した製品分類",
        // パーセンテージで表示
        data: totalQuantity,
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

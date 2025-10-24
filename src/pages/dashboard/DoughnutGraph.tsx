import React from "react";
import type { ChartData } from "chart.js";
import { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { randomColors } from "../../utils/randomColors";
import type { TotallingTypes } from "../../hooks/useFetchTotallingData";
import { useSelector, shallowEqual } from "react-redux";
import type { RootState } from "../../main";

// ✅ React.memoで不要な再レンダリングを防止
const DoughnutGraph = React.memo(() => {
  const { tDate } = useSelector(
    (state: RootState) => state.fetchCalculation,
    shallowEqual // Reduxのstate比較を最適化
  );

  console.log("reduxを使用してる所で生産合計値を取得", tDate);

  const totalQuantity = tDate.map((d: TotallingTypes) => d.total_quantity);
  const allProduct = tDate.map((d: TotallingTypes) => d.product_name);

  // 🎯 useMemoで無駄なランダム色生成を防止
  const dataColors = useMemo(
    () => randomColors(totalQuantity.length),
    [totalQuantity.length]
  );

  // 🍩 ドーナツ型のデータ
  const doughnutData: ChartData<"doughnut"> = useMemo(
    () => ({
      labels: allProduct,
      datasets: [
        {
          label: "今月生産した製品分類",
          data: totalQuantity,
          backgroundColor: dataColors,
        },
      ],
    }),
    [allProduct, totalQuantity, dataColors]
  );

  return (
    <div className="w-full h-full absolute top-0 bg-white">
      <Doughnut data={doughnutData} />
    </div>
  );
});

export default DoughnutGraph;

// 今月売り上げ金額

import type { ChartData } from "chart.js";
import { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { randomColors } from "../../utils/randomColors";
import type { CalculationTypes } from "../../hooks/useFetchCalculationData";
import { useSelector } from "react-redux";
import type { RootState } from "../../main";

const CalculationDoughnutGraph = () => {
  
  //stateの後はstoreに登録してるものを書く
  const { cData } = useSelector((state: RootState) => state.fetchCalculation);
  console.log("redux使用してる所で製品金額合計値を取得", cData);

  const totalPiece = cData.map((d: CalculationTypes) => d.total_sales);
  const allProduct = cData.map((d: CalculationTypes) => d.product_name);

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

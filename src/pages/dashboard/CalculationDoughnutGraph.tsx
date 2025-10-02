// 今月売り上げ金額

import type { ChartData } from "chart.js";
import { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { randomColors } from "../../utils/randomColors";
import { useSelector } from "react-redux";
import type { CalculationTypes } from "../../hooks/useFetchCalculationData";


const CalculationDoughnutGraph = () => {
  
  //stateの後はstoreに登録してるものを書く
  const { data } = useSelector((state:any) => state.fetchCalculation);
  console.log("reduxの中身",data)

  const totalPiece = data.map((d: CalculationTypes) => d.total_sales);
  const allProduct = data.map((d: CalculationTypes) => d.product_name);

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

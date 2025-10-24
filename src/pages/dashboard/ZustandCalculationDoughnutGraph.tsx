import { useMemo } from "react";
import { randomColors } from "../../utils/randomColors";
import { Doughnut } from "react-chartjs-2";

import type { ChartData } from "chart.js";
import type { CalculationTypes } from "../../hooks/useFetchCalculationData";
import { useApi } from "../zustand/ZustandStore";

const ZustandCalculationDoughnutGraph = () => {
  //ZuStandで保持してたもの
  const readApi = useApi((state) => state.initialApi);
  // グラフ画面の前のページでjotaiを使って事前取得
  const dataColors = useMemo(() => randomColors(readApi.length), [readApi]);
  const allProduct: string[] = readApi.map(
    (read: CalculationTypes) => read.product_name
  );
  const localAllProduct: string[] = readApi.map(
    (read: CalculationTypes) => read.product_name
  );
  const totalPiece: number[] = readApi.map(
    (read: CalculationTypes) => read.total_sales
  );
  const localAllPiece: number[] = readApi.map(
    (read: CalculationTypes) => read.total_sales
  );
  // ドーナツ型のデータ
  const doughnutData: ChartData<"doughnut"> = {
    labels: allProduct || localAllProduct,
    datasets: [
      {
        label: "今月生産した製品分類",
        // パーセンテージで表示
        data: totalPiece || localAllPiece,
        backgroundColor: dataColors,
      },
    ],
  };
  return (
    <>
      <Doughnut data={doughnutData} />
    </>
  );
};

export default ZustandCalculationDoughnutGraph;

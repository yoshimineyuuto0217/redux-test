import { useMemo } from "react";
import { randomColors } from "../../utils/randomColors";
import { Doughnut } from "react-chartjs-2";
import { useAtomValue } from "jotai";
import { collectAtom } from "../jotai/atom";
import type { ChartData } from "chart.js";
import type { CalculationTypes } from "../../hooks/useFetchCalculationData";

const JotaiCalculationDoughnutGraph = () => {
  const readValue = useAtomValue(collectAtom);
  const dataColors = useMemo(() => randomColors(readValue.length), [readValue]);
  const allProduct: string[] = readValue.map(
    (read: CalculationTypes) => read.product_name
  );
  const totalPiece: number[] = readValue.map(
    (read: CalculationTypes) => read.total_sales
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
      <Doughnut data={doughnutData} />
    </>
  );
};

export default JotaiCalculationDoughnutGraph;

import { useMemo } from "react";
import { randomColors } from "../../utils/randomColors";
import { Doughnut } from "react-chartjs-2";
import { useAtomValue } from "jotai";
import { collectAtom } from "../jotai/atom";
import type { ChartData } from "chart.js";
import type { CalculationTypes } from "../../hooks/useFetchCalculationData";
import { SetJotai } from "../jotai/SetJotai";

const JotaiCalculationDoughnutGraph = () => {
  // グラフ画面の前のページでjotaiを使って事前取得
  const readValue = useAtomValue(collectAtom);
  // グラフ画面で再ロードかけても情報が反映されるように保持させる
  const { productData } = SetJotai();
  // ローカルのデータをグラフに反映できるように修正
  const stringProductsData = productData
    ? JSON.parse(JSON.stringify(productData))
    : [];
  const dataColors = useMemo(() => randomColors(readValue.length), [readValue]);
  const allProduct: string[] = readValue.map(
    (read: CalculationTypes) => read.product_name
  );
  const totalPiece: number[] = readValue.map(
    (read: CalculationTypes) => read.total_sales
  );
  // ローカルに保存してるグラフ情報を展開してるもの
  const localAllProduct: string[] = stringProductsData.map(
    (t: CalculationTypes) => t.product_name
  );
  const localAllPiece: number[] = stringProductsData.map(
    (s: CalculationTypes) => s.total_sales
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

export default JotaiCalculationDoughnutGraph;

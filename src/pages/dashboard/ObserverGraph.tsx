// 今月売り上げ金額

import type { ChartData } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { API_URL } from "../../constants/urlConstants";
import type { CalculationTypes } from "../../hooks/useFetchCalculationData";
import { useEffect, useRef, useState } from "react";
import { randomColors } from "../../utils/randomColors";

const ObserverGraph = () => {
  const [allProduct, setAllProduct] = useState<string[]>([]);
  const [totalPiece, setTotalPiece] = useState<number[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const apiRef = useRef<HTMLDivElement | null>(null);
  const startRef = useRef<number | null>(null);
  // 監視対象のマージン50%内に入ったら呼ばれる
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      console.log("APIの呼び出しを行いました");
      startRef.current = Date.now();
      (async () => {
        const res = await fetch(`${API_URL}/calculation`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        // 合計値だけを入れてる配列
        const mapTotalPiece: number[] = data.map(
          (piece: CalculationTypes) => piece.total_sales
        );
        // 登録してる製品だけを入れてる配列
        const mapAllProductName: string[] = data.map(
          (productName: CalculationTypes) => productName.product_name
        );
        // 配列のカラーを決める
        const dataColors = randomColors(data.length);
        setAllProduct(mapAllProductName);
        setTotalPiece(mapTotalPiece);
        setColors(dataColors);
        const end = Date.now();
        const start = startRef.current;
        if (start) {
          const durationSec = Math.floor((end - start) / 1000).toFixed(4);
          console.log("呼び出し時間は", durationSec, "です");
        }
      })();
    },
    { rootMargin: "200%" }
  );

  useEffect(() => {
    if (apiRef.current) {
      intersectionObserver.observe(apiRef.current);
    }
    return () => intersectionObserver.disconnect();
  }, []);

  // ドーナツ型のデータ
  const doughnutData: ChartData<"doughnut"> = {
    labels: allProduct,
    datasets: [
      {
        label: "今月生産した製品分類",
        // パーセンテージで表示
        data: totalPiece,
        backgroundColor: colors,
      },
    ],
  };
  return (
    <>
      <div className="w-full h-[500px] bg-white" ref={apiRef}>
        <Doughnut data={doughnutData} />
      </div>
    </>
  );
};

export default ObserverGraph;

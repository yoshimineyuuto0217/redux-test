import { useCallback, useState } from "react";
import { API_URL } from "../constants/urlConstants";

export interface CalculationTypes {
    product_name: string,
    total_quantity: number,
    product_price: number,
    total_sales: number
}

export const useFetchCalculationData = () => {
  const [totalling, setTotalling] = useState<CalculationTypes[]>([]);
  const [totalPiece, setTotalPiece] = useState<number[]>([]);
  const [allProduct, setAllProduct] = useState<string[]>([]);
  const fetchCalculationData = useCallback(async () => {
    try {
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
      setTotalling(data.content);
      setTotalPiece(mapTotalPiece);
      setAllProduct(mapAllProductName);
    } catch (error) {
      console.error("集計に失敗しました", error);
    }
  }, []);
  return { fetchCalculationData, totalling, totalPiece, allProduct };
};

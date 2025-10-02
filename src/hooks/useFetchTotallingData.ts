import { useCallback, useState } from "react";
import { API_URL } from "../constants/urlConstants";

export interface TotallingTypes {
  product_name: string;
  total_quantity: number;
}
// ドーナツ図で使うデータ
export const useFetchTotallingData = () => {
  const [totalling, setTotalling] = useState<TotallingTypes[]>([]);
  const [totalPiece, setTotalPiece] = useState<number[]>([]);
  const [allProduct, setAllProduct] = useState<string[]>([]);
  const fetchTotallingData = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/product/summary`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      // 合計値だけを入れてる配列
      const mapTotalPiece: number[] = data.map(
        (piece: TotallingTypes) => piece.total_quantity
      );
      // 登録してる製品だけを入れてる配列
      const mapAllProductName: string[] = data.map(
        (productName: TotallingTypes) => productName.product_name
      );
      setTotalling(data.content);
      setTotalPiece(mapTotalPiece);
      setAllProduct(mapAllProductName);
    } catch (error) {
      console.error("集計に失敗しました", error);
    }
  }, []);
  return { fetchTotallingData, totalling, totalPiece, allProduct };
};

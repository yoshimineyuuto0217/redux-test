import { useCallback, useState } from "react";
import { API_URL } from "../constants/urlConstants";

export interface BodyDataTypes {
  product_weight: string;
  product_height: string;
  product_temperature: string;
  product_name: string;
  product_quantity: number;
  product_id: number;
}

// 登録した製品情報を取得してるだけ
export const useFetchListData = () => {
  const [bodyData, setBodyData] = useState<BodyDataTypes[] | null>(null);
  const fetchListData = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/product`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setBodyData(data);
    } catch (error) {
      console.error("記事の取得に失敗しました", error);
    }
  }, []);
  return { fetchListData, bodyData };
};

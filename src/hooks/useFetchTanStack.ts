import { API_URL } from "../constants/urlConstants";

interface CalculationTypes {
  product_name: string;
  total_quantity: number;
  product_price: number;
  total_sales: number;
}

//タンスタッククエリ使用
export const fetchCalculationData = async (): Promise<CalculationTypes[]> => {
  const res = await fetch(`${API_URL}/calculation`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error("データの取得に失敗しました");
  const data = await res.json();
  return data ?? [];
};

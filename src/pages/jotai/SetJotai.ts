import { useAtom, useSetAtom } from "jotai";
import { API_URL } from "../../constants/urlConstants";
import { useEffect } from "react";
import { collectAtom, localAtom } from "./atom";

// ここでAPIを上書き
export const SetJotai = () => {
  const overRideCollectAtom = useSetAtom(collectAtom);
  const [productData, setProductData] = useAtom(localAtom);
  useEffect(() => {
    const response = async () => {
      const res = await fetch(`${API_URL}/calculation`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      overRideCollectAtom(data);
      setProductData(data);
    };
    response();
  }, []);
  return { productData };
};

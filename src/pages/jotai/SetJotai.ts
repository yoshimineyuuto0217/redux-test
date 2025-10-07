import { useSetAtom } from "jotai";
import { API_URL } from "../../constants/urlConstants";
import { useEffect } from "react";
import { collectAtom } from "./atom";

// ここでAPIを上書き
export const SetJotai = () => {
  const overRideCollectAtom = useSetAtom(collectAtom);
  useEffect(() => {
    const response = async () => {
      const res = await fetch(`${API_URL}/calculation`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      overRideCollectAtom(data);
      console.log("Jotaiが呼ばれてる")
    };
    response();
  }, []);
  return null;
};

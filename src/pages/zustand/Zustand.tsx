import { Link } from "react-router-dom";
import { useApi, useBear } from "./ZustandStore";
import { useEffect } from "react";
import { API_URL } from "../../constants/urlConstants";

const Zustand = () => {
  // zustandで事前取得してます
  const initialBears = useBear((state) => state.bears);
  const updateApi = useApi((state) => state.readApi);

  useEffect(() => {
    const response = async () => {
      const res = await fetch(`${API_URL}/calculation`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log("取得しました",data)
      updateApi(data);
    };
    response();
  }, [updateApi]);

  return (
    <>
      <div>ZuStandから取得してきたもの{initialBears}</div>
      <Link
        to="/zustand/nest"
        className="w-[35%] h-[140px] bg-red-300 flex justify-center items-center"
      >
        Zustand
      </Link>
    </>
  );
};

export default Zustand;

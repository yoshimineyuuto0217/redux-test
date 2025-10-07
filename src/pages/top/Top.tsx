import { Link } from "react-router-dom";
import Title from "../../components/common/Title";
import { useEffect } from "react";

const Top = () => {
  // API事前呼び出す
  useEffect(() => {}, []);
  return (
    <div className="w-2/3 mx-auto h-screen flex flex-col justify-center">
      <div className="flex flex-col justify-center ">
        <Title title="工程・製造実績管理システムの開発" />
        <div className="flex w-full gap-x-5 justify-center">
          <Link
            to="/register"
            className="w-[35%] h-[140px] bg-red-300 flex justify-center items-center"
          >
            製品登録
          </Link>
          <Link
            to="/list"
            className="w-[35%] h-[140px] bg-red-300 flex justify-center items-center"
          >
            製品在庫
          </Link>
          <Link
            to="/dashboard"
            className="w-[35%] h-[140px] bg-red-300 flex justify-center items-center"
          >
            進捗状況
          </Link>
          <Link
            to="/jotai"
            className="w-[35%] h-[140px] bg-red-300 flex justify-center items-center"
          >
            Jotai
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Top;

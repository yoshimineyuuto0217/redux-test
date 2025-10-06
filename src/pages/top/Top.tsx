import { Link } from "react-router-dom";
import Title from "../../components/common/Title";
import { useEffect } from "react";
import {
  fetchCalculationData,
  fetchTotalling,
} from "../../redux/calculationSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";

const Top = () => {
  // API事前呼び出す
  const dispatch = useAppDispatch();
  const { cData, tDate, lastFetched } = useAppSelector(
    (state) => state.fetchCalculation
  );
  // APIで再取得される時間を設定
  useEffect(() => {
    const ONE_HOUR = 1000 * 60 * 60;
    const now = Date.now();
    if (!cData.length) {
      // 初回は必ず取得
      dispatch(fetchCalculationData());
      dispatch(fetchTotalling()); // ← 生産合計も呼ぶ
      console.log("初回取得しました");
    } else if (lastFetched && now - lastFetched > ONE_HOUR) {
      // 最終取得から1時間経っていたら再取得
      dispatch(fetchCalculationData());
      dispatch(fetchTotalling()); // ← 生産合計も呼ぶ
      console.log("1時間経過したので再取得しました");
    } else {
      console.log("Redux Persist のデータを利用");
    }
  }, [dispatch, cData, tDate, lastFetched]);

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
            to="/form"
            className="w-[35%] h-[140px] bg-red-300 flex justify-center items-center"
          >
            React-Hook-Form
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Top;

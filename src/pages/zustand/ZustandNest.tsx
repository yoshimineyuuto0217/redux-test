import ZustandCalculationDoughnutGraph from "../dashboard/ZustandCalculationDoughnutGraph";
import { useApi, useBear } from "./ZustandStore";

const ZustandNest = () => {
  const incrementBear = useBear((state) => state.increment);
  const updateBear = useBear((state) => state.updateBears);
  const readApi = useApi((state) => state.initialApi);
  console.log(readApi);
  return (
    <>
      <div className="w-full h-screen flex justify-center">
        <div className="w-[500px]  justify-between flex h-[10%] items-center">
          <button
            type="button"
            onClick={() => incrementBear()}
            className="cursor-pointer bg-red-400 p-3"
          >
            カウントアップ
          </button>
          <button
            type="button"
            onClick={() => updateBear({ bears: 4 })}
            className="cursor-pointer bg-amber-500 p-3"
          >
            関数の上書き
            <br />
            (基準4に変更)
          </button>
          <button
            type="button"
            onClick={() => updateBear({ bears: 10 })}
            className="cursor-pointer bg-amber-500 p-3"
          >
            関数の上書き
            <br />
            (基準10変更)
          </button>
        </div>
        <div className="w-[600px]">
          <ZustandCalculationDoughnutGraph />
        </div>
      </div>
    </>
  );
};

export default ZustandNest;

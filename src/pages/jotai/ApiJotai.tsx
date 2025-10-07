import { Link } from "react-router-dom";
import JotaiCalculationDoughnutGraph from "../dashboard/JotaiCalculationDoughnutGraph";

const ApiJotai = () => {
  return (
    <>
      <div className="h-[60%] mx-auto w-[50%]">
        <JotaiCalculationDoughnutGraph />
        <Link
          to="/jotai/nest"
          className="w-[35%] h-[140px] bg-red-300 flex justify-center items-center mx-auto"
        >
          NestJotai
        </Link>
      </div>
    </>
  );
};

export default ApiJotai;

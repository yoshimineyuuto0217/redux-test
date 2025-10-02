import { useState } from "react";
import BarGraph from "./BarGraph";
import DoughnutGraph from "./DoughnutGraph";
import TabNames from "./TabNames";
import CalculationDoughnutGraph from "./CalculationDoughnutGraph";

// ダッシュボード切り替えをしてる
export const DashBoard = () => {
  const [activeTab, setActiveTab] = useState("今月生産");
  return (
    <>
      <div className="w-[600px] h-[600px] ml-8">
        <h2 className="text-2xl text-center p-5">ダッシュボード画面</h2>
        <div className="flex w-full">
          <TabNames
            tabName="今月生産"
            changeDashBoard={() => setActiveTab("今月生産")}
          />
          <TabNames
            tabName="年間生産"
            changeDashBoard={() => setActiveTab("年間生産")}
          />
          <TabNames
            tabName="今月売り上げ"
            changeDashBoard={() => setActiveTab("今月売り上げ")}
          />
        </div>
        <div className="w-full relative border-r-1 border-l-1 border-b-1 h-full">
          {activeTab === "今月生産" && <BarGraph isHorizontal={false} />}
          {activeTab === "年間生産" && <DoughnutGraph />}
          {activeTab === "今月売り上げ" && <CalculationDoughnutGraph />}
        </div>
      </div>
    </>
  );
};

export default DashBoard;

import { useEffect } from "react";
import { useFetchListData } from "../../hooks/useFetchListData";
import { API_URL } from "../../constants/urlConstants";

const Table = () => {
  // 登録してる製品を取得
  const { fetchListData, bodyData } = useFetchListData();
  const theadData = ["製品名", "重量", "高さ", "温度", "生産数"];

  useEffect(() => {
    fetchListData();
  }, [fetchListData]);

  //削除機能
  const deleteProduct = async (index: number) => {
    try {
      const response = await fetch(`${API_URL}/products/${index}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete: ${response.statusText}`);
      }

      console.log(`製品 ${index} を削除しました`);
    } catch (error) {
      console.error("削除に失敗しました", error);
    }
    fetchListData();
  };

  return (
    <>
      <table className=" w-full">
        <thead className="bg-red-200">
          <tr className="border-l border-t border-r ">
            {theadData.map((HeadData) => (
              <th className="border-r">{HeadData}</th>
            ))}
          </tr>
        </thead>
        <tbody className="border-1">
          {bodyData?.map((d) => (
            <>
              <tr key={d.product_id} className="text-center">
                <td className="border-1">{d.product_name}</td>
                <td className="border-1">{d.product_weight}</td>
                <td className="border-1">{d.product_height}</td>
                <td className="border-1">{d.product_temperature}</td>
                <td className="border-1">{d.product_quantity}</td>
                <td
                  className="cursor-pointer border-b"
                  onClick={() => deleteProduct(d.product_id)}
                >
                  削除
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;

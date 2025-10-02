import Table from "../../components/common/Table";
import Title from "../../components/common/Title";

const List = () => {
  return (
    <div className="w-full ">
      <div className="w-[90%] mx-auto ">
        <Title title="在庫一覧" />
        <Table />
      </div>
    </div>
  );
};

export default List;

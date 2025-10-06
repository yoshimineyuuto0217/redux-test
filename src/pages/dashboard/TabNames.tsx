const TabNames = ({
  tabName,
  changeDashBoard,
}: {
  tabName: string;
  changeDashBoard: () => void;
}) => {
  return (
    <button
      className="px-5 py-2 border-1 border-solid-black cursor-pointer w-1/3"
      onClick={changeDashBoard}
    >
      {tabName}
    </button>
  );
};

export default TabNames;

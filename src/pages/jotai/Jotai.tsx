import { Link } from "react-router-dom";
import CollectAtom from "./CollectAtom";
import { SetJotai } from "./SetJotai";

const Jotai = () => {
  SetJotai();
  return (
    <>
      <div>
        <CollectAtom />
      </div>
      <Link
        to="/jotai/api"
        className="w-[35%] h-[140px] bg-red-300 flex justify-center items-center"
      >
        API-Jotai
      </Link>
    </>
  );
};

export default Jotai;

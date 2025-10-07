import { useAtomValue, useSetAtom } from "jotai";
import { countAtom, twiceAtom } from "./atom";

const NestJotai = () => {
  const nestJotai = useAtomValue(countAtom);
  const nestTwice = useAtomValue(twiceAtom);
  const updateCount = useSetAtom(countAtom);
  const updateTwice = useSetAtom(twiceAtom);
  return (
    <>
      <div className="items-center w-full text-center h-screen flex flex-col justify-center ">
        以下の値は別ページで更新されたものJotaiを使い表示してます <br />
        <p className="text-red-500 text-5xl">{nestJotai}</p>
        <p className="text-red-500 text-5xl">{nestTwice}</p>
        <button
          typeof="button"
          className="cursor-pointer border-black border-1 p-1"
          onClick={() => {
            updateCount(0);
            updateTwice(1);
          }}
        >
          reset
        </button>
      </div>
    </>
  );
};

export default NestJotai;

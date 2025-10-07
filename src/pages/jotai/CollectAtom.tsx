import { useAtomValue, useSetAtom } from "jotai";
import { countAtom, twiceAtom } from "./atom";

export const CollectAtom = () => {
  // useAtom()にはatom()で囲ったものを入れる必要がある
  // atom()からatom()を派生させる時はget(),set()を使いuseAtomValue()とuseSetAtom()がコンポーネント内で加工する時に使われる！！
  // useAtom()は読むと書くを提供してる useState()とは動きが異なる!!
  // const [count, setCount] = useAtom(countAtom);
  // 値のみ取得
  const countValue = useAtomValue(countAtom);
  const twiceValue = useAtomValue(twiceAtom);
  // 更新関数のみ取得
  const updateCount = useSetAtom(countAtom);
  const updateTwice = useSetAtom(twiceAtom);
  return (
    <>
      <div>
        <p>Jotaiで持ってきた値:{countValue}</p>
        <p>2倍ずつ増やす関数:{twiceValue}</p>
        <div>
          <button
            type="button"
            className="cursor-pointer border-black border-1"
            onClick={() => updateCount((prev) => prev + 1)}
          >
            カウントアップ（1）
          </button>
          <button
            type="button"
            className="cursor-pointer border-black border-1"
            onClick={() => updateTwice((prev) => prev * 2)}
          >
            カウントアップ（2x）
          </button>
        </div>
      </div>
    </>
  );
};

export default CollectAtom;

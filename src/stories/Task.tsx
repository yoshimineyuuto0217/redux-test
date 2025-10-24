import { useState } from "react";
import Modal from "./Modal";

interface StoryBook {
  task: { id: number; title: string; state: boolean };
  modal: { title: string; context: string };
  onArchiveTask: () => void;
  onPinTask: () => void;
}

export default function Task({ task: { id, title }, modal }: StoryBook) {
  const [isModal, setIsModal] = useState(false);
  const handleClick = () => {
    setIsModal((prev) => !prev);
  };
  return (
    <div className="list-item">
      <label htmlFor="title" aria-label={title}>
        <input type="text" value={title} readOnly={true} name="title" />
        <p>このページのIDは{id}</p>
        <button type="button" onClick={() => handleClick()}>
          モーダルを表示させるボタン
        </button>
        {isModal && <Modal props={modal} />}
      </label>
    </div>
  );
}

import { useState } from "react";
import * as z from "zod";

// 送信時に使う型チェック
const Player = z.object({
  name: z.string().max(5, { error: "5文字以内に押さえてね" }),
  address: z.string().min(10, { error: "10文字以上で書いてください" }),
});

const ZodForm = () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const zodSignUp = () => {
    try {
      if (Player.parse({ name: name, address: address })) {
        alert("バリデーションOK");
        setAddress("");
        setName("");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessage = error.issues.map((issue) => issue.message).join('\n');
        alert(errorMessage);
        console.log(
          "zodのバリデーションエラーだよ",
          error.issues.map((issue) => issue.message)
        );
      }
    }
  };

  return (
    <>
      <form action={zodSignUp}>
        <div className="mb-2">
          <label htmlFor="name" id="name">
            <p>名前</p>
            <input
              type="text"
              id="name"
              className="border-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="address" id="address">
            <p>住所</p>
            <input
              type="text"
              id="address"
              className="border-1"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 p-3 rounded-2xl cursor-pointer"
        >
          登録
        </button>
      </form>
    </>
  );
};

export default ZodForm;

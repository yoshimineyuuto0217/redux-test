import React, { useRef, useState } from "react";
import Input from "../../components/common/Input";
import Title from "../../components/common/Title";
import Button from "../../components/common/Button";
import { API_URL } from "../../constants/urlConstants";

const Register = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [celsius, setCelsius] = useState("");
  const [product, setProduct] = useState("");
  const [pieces, setPieces] = useState("");

  //製品の登録
  const registerProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/product`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_weight: weight,
          product_height: height,
          product_temperature: celsius,
          product_name: product,
          product_quantity: pieces,
        }),
      });
      const data = await response.json();
      console.log("送信した内容は", data);
    } catch (error) {
      console.error("記事投稿に失敗しました", error);
    }
  };

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[80%]mx-auto">
        <form
          onSubmit={registerProduct}
          className="flex flex-col items-center w-full "
        >
          <Title title="製品登録" />
          <Input
            attribute="product"
            label="製品名"
            value={product}
            onChange={setProduct}
            placeholder="製品名"
          />
          <Input
            attribute="weight"
            label="重量"
            value={weight}
            onChange={setWeight}
            placeholder={"1000mg"}
          />
          <Input
            attribute="hight"
            label="高さ"
            value={height}
            onChange={setHeight}
            placeholder={"1200mm"}
          />
          <Input
            attribute="Celsius"
            label="温度"
            value={celsius}
            onChange={setCelsius}
            placeholder={"1500℃"}
          />
          <Input
            attribute="pieces"
            label="生産数"
            type={"number"}
            value={pieces}
            onChange={setPieces}
            placeholder={"1000個"}
          />
          <Button
            buttonClass=" bg-blue-500 p-5 my-4 cursor-pointer"
            buttonName="登録する"
            ref={buttonRef}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;

import { Controller, useForm, type SubmitHandler } from "react-hook-form";

const Gender = {
  empty: "",
  female: "female",
  male: "male",
  other: "other",
} as const;

type Gender = (typeof Gender)[keyof typeof Gender];

type Inputs = {
  password: string;
  productName: string;
  gender: Gender;
  comment?: string;
};

const Form = () => {
  // 初期値の値 （デフォルトで送る値)
  const defaultValues = {
    password: "",
    productName: "",
    gender: Gender.empty,
    comment: "",
  };

  const { control, handleSubmit, reset } = useForm<Inputs>({
    defaultValues,
    mode: "onChange",
  });
  // 送信処理
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log("送信中", data);
  // リセット処理
  const handleReset = () => {
    reset();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-[90%] h-[500px] border-1 border-black flex flex-col justify-center"
      >
        <Controller
          name="productName"
          control={control}
          rules={{ required: "必須入力です" }}
          render={({ field, fieldState }) => (
            <div className="border-1 border-black flex">
              <label htmlFor="productName" className="w-[20%]">
                製品名
              </label>
              <input
                type="text"
                id="productName"
                {...field}
                className="w-[80%]"
              />
              {fieldState.error && (
                <span className="text-red-300">{fieldState.error.message}</span>
              )}
            </div>
          )}
        ></Controller>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "必須入力です",
            pattern: {
              value: /^[a-zA-Z0-9]{8,}$/,
              message: "英数字で8文字以上にしてください",
            },
          }}
          render={({ field, fieldState }) => (
            <div className="border-1 border-black flex">
              <label htmlFor="password" className="w-[20%]">
                パスワード
              </label>
              <input
                type="text"
                id="password"
                value={field.value}
                className="w-[80%]"
                onChange={(e) => field.onChange(e)}
              />
              {fieldState.error && (
                <span className="text-red-300">{fieldState.error.message}</span>
              )}
            </div>
          )}
        ></Controller>
        <div className="flex ml-auto ">
          <button
            type="submit"
            className="cursor-pointer w-[150px] h-[30px] bg-amber-400"
          >
            送信
          </button>
          <button
            onClick={handleReset}
            type="button"
            className="cursor-pointer w-[150px] h-[30px] bg-blue-400"
          >
            リセット
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

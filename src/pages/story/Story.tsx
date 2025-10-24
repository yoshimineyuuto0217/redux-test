const Story = () => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center">
        <button typeof="button" className="text-3xl">
          <a
            href="http://localhost:6006/?path=/docs/configure-your-project--docs"
            target="_blank"
            className=" text-blue-500 "
          >
            storyのURL
          </a>
          <p>
            ストリーブックスのスタートコマンドは以下です
            <br />
            npm run storybook
          </p>
        </button>
      </div>
    </>
  );
};

export default Story;

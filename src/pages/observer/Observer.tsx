import { useEffect, useRef, useState } from "react";
import ObserverGraph from "../dashboard/ObserverGraph";

const Observer = () => {
  const serverRef = useRef<HTMLDivElement | null>(null);
  const [graph, setGraph] = useState(false);

  const intersectionObserver = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0) return;
    console.log("呼ばれました", entries);
    const timer = setTimeout(() => {
      setGraph(true);
    }, 100);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    if (serverRef.current) {
      intersectionObserver.observe(serverRef.current);
    }
    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex justify-center flex-col items-center bg-amber-300">
        <p>IntersectionObserver()メソッドのテストを行なってる場所だよ!!</p>
      </div>
      <div className="w-screen h-screen bg-green-500">
        <p>監視してない所</p>
      </div>
      <div className="w-screen h-screen bg-red-300" ref={serverRef}>
        <p>監視してません</p>
      </div>
      <div>
        {graph && (
          <>
            {" "}
            <p>ここは監視してます</p>
            <ObserverGraph />
          </>
        )}
      </div>
    </>
  );
};

export default Observer;

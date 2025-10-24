import { useQuery } from "@tanstack/react-query";
import { fetchCalculationData } from "../../hooks/useFetchTanStack";

const TanStack = () => {
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: fetchCalculationData,
  });
  return (
    <>
      <p>API重いから取得されるのに時間がかかります</p>
      <ul className="flex gap-x-2">
        {query.data?.map((todo, index) => (
          <>
            <li key={index}></li>
            <li>{todo.product_name} </li>
            <li>{todo.total_sales}</li>
            <li>{todo.product_price}個</li>
          </>
        ))}
      </ul>
    </>
  );
};

export default TanStack;

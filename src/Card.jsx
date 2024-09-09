import { useEffect, useState } from "react";
import Count from "./Count";
import CountButtons from "./CountButtons";
import Reset from "./Reset";
import Title from "./Title";
const PRO_COUNT_LIMIT = 5;

const Card = () => {
  const [count, setCount] = useState(0);
  const locked = count === PRO_COUNT_LIMIT ? true : false;
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        const newCount = count + 1;
        if (newCount > 5) {
          setCount(5);
        } else {
          setCount(count + 1);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [count]);
  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <Reset setCount={setCount} />
      <CountButtons setCount={setCount} locked={locked} />
    </div>
  );
};
export default Card;

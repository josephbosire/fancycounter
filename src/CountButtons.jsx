import CountButton from "./CountButton";

const CountButtons = ({ setCount, locked }) => {
  const handlePlusClick = () => {
    setCount((prev) => prev + 1);
  };
  const handleMinusClick = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  return (
    <div className="button-container">
      <CountButton onClick={handleMinusClick} type="minus" locked={locked} />
      <CountButton onClick={handlePlusClick} type="plus" locked={locked} />
    </div>
  );
};

export default CountButtons;

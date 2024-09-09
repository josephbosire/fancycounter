import CountButton from "./CountButton";

const CountButtons = ({ setCount, locked }) => {
  const handlePlusClick = (event) => {
    setCount((prev) => prev + 1);
    event.currentTarget.blur();
  };
  const handleMinusClick = (event) => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
    event.currentTarget.blur();
  };
  return (
    <div className="button-container">
      <CountButton onClick={handleMinusClick} type="minus" />
      <CountButton onClick={handlePlusClick} type="plus" locked={locked} />
    </div>
  );
};

export default CountButtons;

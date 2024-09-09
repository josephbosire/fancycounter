import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
const CountButton = ({ onClick, type, locked }) => {
  return (
    <button disabled={locked} className="count-btn" onClick={onClick}>
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
};

export default CountButton;

import { useState, useEffect } from "react";

const NumberCell = ({ moveTo }: { moveTo: number }) => {
  const [row, setRow] = useState(0);
  const x = 28;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRow(moveTo);
    });

    return () => {
      clearTimeout(timeout);
    };
  }, [moveTo]);
  return (
    <div className="flex flex-col overflow-hidden gap-3 max-h-6 w-fit text-center">
      <div
        id="counter"
        className="transiton ease-in-out"
        style={{
          transition: "translate 800ms cubic-bezier(.1,.67,0,1)",
          translate: `0rem ${x * -row}px`,
        }}
      >
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </div>
  );
};

export default NumberCell;

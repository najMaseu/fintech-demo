import { default as React, useCallback, useState } from "react";

interface ButtonProps {
  name: number;
  log: (idx: number) => void;
}

const Button: React.FC<ButtonProps> = React.memo(({ name, log }) => {
  console.log("button rendered");
  return <button onClick={() => log(name)}>{name}</button>;
});

export const Buttons = () => {
  const [btnClickedIdx, setBtnClickedIdx] = useState(1);

  const handleIndexChange = useCallback(
    (idx: number) => setBtnClickedIdx(idx),
    []
  );

  return (
    <div>
      button clicked: {btnClickedIdx}
      {[...Array(5)].map((item, idx) => (
        <Button name={idx} log={handleIndexChange} />
      ))}
    </div>
  );
};

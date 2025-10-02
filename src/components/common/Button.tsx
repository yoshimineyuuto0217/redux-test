import type { Ref } from "react";

const Button = ({
  buttonName,
  buttonClass,
  ref,
}: {
  buttonName: string;
  buttonClass: string;
  ref: Ref<HTMLButtonElement> | undefined;
}) => {
  return (
    <button type="submit" className={buttonClass} ref={ref}>
      {buttonName}
    </button>
  );
};

export default Button;

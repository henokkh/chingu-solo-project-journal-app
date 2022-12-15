import Image from "next/image";
import { FC } from "react";

interface ButtonProps {
  text: string;
  iconUrl?: string;
  danger?: boolean;
}

const SecondaryButton: FC<ButtonProps> = ({ text, iconUrl, danger }) => {
  const colors = danger ? "text-custom-red" : "text-custom-blue";

  return (
    <button
      type="button"
      className={`btn ${colors} hover:underline focus:underline focus:ring-0 focus:ring-offset-0`}
    >
      {iconUrl && (
        <Image src={iconUrl} className="mr-2" alt="" width="14" height="14" />
      )}
      {text}
    </button>
  );
};

export default SecondaryButton;

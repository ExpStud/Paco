import Image from "next/image";
import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  icon: string;
  name: string;
  initialX?: number;
  initialY?: number;
  highlight?: boolean;
}
const DesktopIcon: React.FC<Props> = (props: Props) => {
  const {
    icon,
    name,
    initialX = 0,
    initialY = 0,
    highlight,
    className,
    ...divProps
  } = props;

  return (
    <div
      className={`absolute col-centered z-10 cursor-pointer transition-300 ${
        className ?? ""
      }  "`}
      {...divProps}
    >
      <Image
        src={`/images/desktop/${icon}.png`}
        width={48}
        height={48}
        alt={name}
      />
      <p
        className={`text-sm p-0.5 ${highlight ? "bg-blue-600 text-white" : ""}`}
      >
        {name}
      </p>
    </div>
  );
};

export default DesktopIcon;

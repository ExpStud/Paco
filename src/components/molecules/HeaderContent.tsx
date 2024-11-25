import { FC } from "react";
import { Logo } from "@components";

const HeaderContent: FC = () => {
  return (
    <div className="w-screen flex items-center justify-between px-4 md:px-6 py-4 z-20">
      <Logo />
    </div>
  );
};
export default HeaderContent;

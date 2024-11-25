import { FC } from "react";
import {
  DexscreenerIcon,
  JupIcon,
  Logo,
  TelegramIcon,
  TwitterIcon,
} from "@components";
import { motion } from "framer-motion";
import { enterAnimation } from "@constants";

interface Props {}
const Header: FC<Props> = (props: Props) => {
  return (
    <motion.header
      className={`max-width w-full flex items-center justify-between z-20 px-5 md:px-10 xl:px-20 2xl:px-0 py-5 md:py-7 xl:py-12`}
      {...enterAnimation}
    >
      <Logo />
      <div className="flex items-center gap-2 lg:gap-4">
        <TwitterIcon />
        <TelegramIcon />
        <DexscreenerIcon />
        <JupIcon />
      </div>
    </motion.header>
  );
};

export default Header;

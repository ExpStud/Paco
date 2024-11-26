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
      className="absolute top-0 w-full flex items-center justify-between z-20 px-5 xl:px-16 2xl:px-24 py-5 xl:py-9"
      {...enterAnimation}
    >
      <Logo />
      <div className="flex items-center gap-2 sm:gap-4">
        <TwitterIcon />
        <TelegramIcon />
        <DexscreenerIcon />
        <JupIcon />
      </div>
    </motion.header>
  );
};

export default Header;

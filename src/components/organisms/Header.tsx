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
      className={`max-width w-full flex items-center justify-between z-20 px-5 2xl:px-0 py-5  xl:py-9`}
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

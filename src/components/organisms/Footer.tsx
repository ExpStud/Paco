import { motion } from "framer-motion";
import { FC } from "react";
import { enterAnimation } from "@constants";

const Footer: FC = () => {
  return (
    <motion.footer
      className="px-8 py-4 w-full bg-transparent z-0  bottom-0"
      key="footer"
      {...enterAnimation}
    ></motion.footer>
  );
};

export default Footer;

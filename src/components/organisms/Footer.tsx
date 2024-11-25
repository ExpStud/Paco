import { motion } from "framer-motion";
import { FC } from "react";
import { enterAnimation } from "@constants";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <motion.footer
      className="max-width min-h-[44px] w-full flex items-center"
      key="footer"
      {...enterAnimation}
    >
      <Image
        src="/images/buttons/solana.svg"
        alt="solana"
        width={86}
        height={35}
        className="pl-[5px]"
      />
      <FooterDividerOne className="mx-1.5" />
      <FooterDividerTwo />
      <div className="flex gap-2 mx-2">
        <Image
          src="/images/buttons/pencil.png"
          alt="pencil"
          width={25}
          height={25}
        />
        <Image
          src="/images/buttons/file.png"
          alt="file"
          width={25}
          height={25}
        />
        <Image
          src="/images/buttons/outlook.png"
          alt="outlook"
          width={25}
          height={25}
        />
        <Image
          src="/images/buttons/explorer.png"
          alt="explorer"
          width={25}
          height={25}
        />
      </div>
      <FooterDividerOne className="mr-1.5" />
      <FooterDividerTwo />
      <div className="flex gap-1 mx-2">
        <Image
          src="/images/buttons/xxx.svg"
          alt="xxx"
          width={243}
          height={35}
        />
        <Image
          src="/images/buttons/outlook-lg.svg"
          alt="outlook-lg"
          width={243}
          height={35}
        />
        <Image
          src="/images/buttons/buy-solana.svg"
          alt="buy solana"
          width={243}
          height={35}
        />
      </div>
    </motion.footer>
  );
};

const FooterDividerOne: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} className={`footer-divider-1 ${props.className || ""}`} />
);
const FooterDividerTwo: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} className={`footer-divider-2 ${props.className || ""}`}>
    <div />
    <div />
    <div />
  </div>
);

export default Footer;

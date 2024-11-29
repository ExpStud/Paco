import { motion } from "framer-motion";
import { FC } from "react";
import { enterAnimation } from "@constants";
import Image from "next/image";
import { Clock } from "@components";

const Footer: FC = () => {
  return (
    <motion.footer
      className=" min-h-[44px] w-full flex items-center justify-between py-1 lg:py-1.5"
      key="footer"
      {...enterAnimation}
    >
      <div className="flex flex-row items-start">
        <div className="flex items-center">
          <a href="https://jup.ag/" target="_blank" rel="noreferrer">
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/solana.svg`}
              alt="solana"
              width={86}
              height={35}
              className="pl-[5px]"
            />
          </a>
          <FooterDividerOne className="mx-1.5" />
          <FooterDividerTwo />
          <div className="flex gap-2 mx-2">
            <a href="https://jup.ag/" target="_blank" rel="noreferrer">
              <Image
                src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/pencil.png`}
                alt="pencil"
                width={25}
                height={25}
              />
            </a>
            <a href="https://jup.ag/" target="_blank" rel="noreferrer">
              <Image
                src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/file.png`}
                alt="file"
                width={25}
                height={25}
              />
            </a>
            <a href="https://jup.ag/" target="_blank" rel="noreferrer">
              <Image
                src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/outlook.png`}
                alt="outlook"
                width={25}
                height={25}
              />
            </a>
            <a href="https://jup.ag/" target="_blank" rel="noreferrer">
              <Image
                src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/explorer.png`}
                alt="explorer"
                width={25}
                height={25}
              />
            </a>
          </div>
          <FooterDividerOne className="mr-1.5" />
          <FooterDividerTwo />
        </div>
        <div className="hidden md:flex gap-[3px] mx-2 ">
          <a href="https://jup.ag/" target="_blank" rel="noreferrer">
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/xxx.svg`}
              alt="xxx"
              width={243}
              height={35}
            />
          </a>

          <a href="https://jup.ag/" target="_blank" rel="noreferrer">
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/outlook-lg.svg`}
              alt="outlook-lg"
              width={243}
              height={35}
            />
          </a>
          <a href="https://jup.ag/" target="_blank" rel="noreferrer">
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/buy-solana.svg`}
              alt="buy solana"
              width={243}
              height={35}
              className="hidden lg:block"
            />
          </a>
        </div>
      </div>
      <div className="flex items-center self-start h-full mr-1">
        <div className="flex mx-1 h-full">
          <div className="inner-divider bg-window-gray-400" />
          <div className="inner-divider bg-white" />
        </div>
        <div className="footer-time">
          <div className="flex gap-1">
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/time.png`}
              alt="time"
              width={25}
              height={25}
              className="cursor-pointer"
            />
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/speaker.png`}
              alt="speaker"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </div>
          <Clock />
        </div>
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

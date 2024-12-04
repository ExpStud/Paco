import { motion } from "framer-motion";
import { FC, useRef } from "react";
import { enterAnimation } from "@constants";
import Image from "next/image";
import { Clock, BuySolanaButton, OutlookButton, XxxButton } from "@components";

const Footer: FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    } else {
      console.error("Audio element not found");
    }
  };

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
          <XxxButton
            onClick={() =>
              window.open(
                "https://read.dukeupress.edu/environmental-humanities/article/14/3/661/319761/Theorizing-the-Gay-Frog",
                "_blank"
              )
            }
          />
          <OutlookButton
            onClick={() =>
              window.open(
                "https://www.reddit.com/r/solana/comments/1h0kluf/stop_gambling_your_money_on_this_meme_shits/?rdt=62662",
                "_blank"
              )
            }
          />
          <BuySolanaButton
            onClick={() => window.open("https://ftx.com/", "_blank")}
          />
        </div>
      </div>
      <div className="flex items-center self-start h-full mr-1">
        <div className="flex mx-1 h-full">
          <div className="inner-divider bg-window-gray-400" />
          <div className="inner-divider bg-white" />
        </div>
        <div className="footer-time">
          <div className="flex gap-1">
            {/* Hidden audio element */}
            <audio
              ref={audioRef}
              src={`${process.env.CLOUDFLARE_STORAGE}/audio/hooyahh.mp3`}
            />
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/time.png`}
              alt="time"
              width={25}
              height={25}
              // className="cursor-pointer"
              // onClick={playAudio}
            />
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/speaker.png`}
              alt="speaker"
              width={25}
              height={25}
              className="cursor-pointer"
              onClick={playAudio}
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

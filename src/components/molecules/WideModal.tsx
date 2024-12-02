import { motion } from "framer-motion";
import { FC, ReactNode, HTMLAttributes, useState } from "react";
import { scaleExitAnimation } from "@constants";
import Image from "next/image";
import { useLockBodyScroll } from "src/hooks";
import { ModalScrollBar } from "@components";

interface Props extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  children: ReactNode;
  title: string;
  titleSrc: string;
}
const WideModal: FC<Props> = (props: Props) => {
  const { show, children, titleSrc, title, className, ...componentProps } =
    props;

  const [maximize, setMaximize] = useState<boolean>(false);
  const [minimize, setMinimize] = useState<boolean>(false);
  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(
    null
  );
  const [scrollbarPosition, setScrollbarPosition] = useState<number>(0);

  useLockBodyScroll(show);

  // const scrollContent = (direction: "up" | "down") => {
  //   const container = document.querySelector(".modal-content-container");
  //   if (container) {
  //     const scrollAmount = 50; // Adjust this value as needed
  //     container.scrollBy({
  //       top: direction === "up" ? -scrollAmount : scrollAmount,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // const handleMouseDown = (direction: "up" | "down") => {
  //   scrollContent(direction); // Initial scroll
  //   const interval = setInterval(() => scrollContent(direction), 100); // Adjust interval as needed
  //   setScrollInterval(interval);
  // };

  // const handleMouseUp = () => {
  //   if (scrollInterval) {
  //     clearInterval(scrollInterval);
  //     setScrollInterval(null);
  //   }
  // };

  // const handleScroll = () => {
  //   const container = document.querySelector(".modal-content-container");
  //   if (container) {
  //     const scrollTop = container.scrollTop;
  //     const scrollHeight = container.scrollHeight - container.clientHeight;
  //     const scrollPercentage = scrollTop / scrollHeight;
  //     setScrollbarPosition(scrollPercentage * 100);
  //   }
  // };

  return (
    <motion.div
      key="image-modal"
      className="fixed inset-0 w-screen h-screen z-50"
      onClick={componentProps.onClick}
      {...scaleExitAnimation}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`modal-container left-1/2 top-1/2 lg:top-[48%] transform -translate-x-1/2 -translate-y-1/2 
          ${className} ${
          maximize
            ? "modal-miximized"
            : "h-[85svh] lg:h-[634px] w-[94vw] lg:!w-[1098px]"
          // ? "w-[99vw] top-1 bottom-[47px] left-1/2 transform -translate-x-1/2"
          // : "h-[85svh] lg:h-[634px] w-[94vw] lg:w-[1064px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }`}
      >
        {/* blue header */}
        <div className="bg-custom-blue-500 w-full min-h-[42px] flex justify-between p-1 ">
          <div className="row-centered gap-1.5 ml-0.5">
            <Image
              src={`/images/desktop/${titleSrc}`}
              width={24}
              height={24}
              alt="icon"
            />
            <p className="text-white text-lg">{title}</p>
          </div>
          <div className="flex">
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/minimize.svg`}
              width={30}
              height={30}
              alt="minimize"
              className="cursor-pointer"
              onClick={() => setMinimize(!minimize)}
            />
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/maximize.svg`}
              width={30}
              height={30}
              alt="maximize"
              className="cursor-pointer mr-1"
              onClick={() => setMaximize(!maximize)}
            />
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/close.svg`}
              width={30}
              height={30}
              alt="close"
              onClick={componentProps.onClick}
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* body */}
        <div className="flex overflow-hidden w-full h-full">
          {/* content */}
          <div className="base-gray-2 pt-[5px] w-full h-full">
            <div className="wide-modal-content-container justify-center w-full h-full p-5">
              {children}
            </div>
          </div>
          {/* scroll */}
          {/* <div className="relative flex flex-col items-center justify-between h-full ml-1">
            <button
              onMouseDown={() => handleMouseDown("up")}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <Image
                src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/scroll-up.svg`}
                width={34}
                height={36}
                alt="up"
              />
            </button>

            <ModalScrollBar position={scrollbarPosition} />
            <button
              onMouseDown={() => handleMouseDown("down")}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <Image
                src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/scroll-down.svg`}
                width={34}
                height={36}
                alt="down"
              />
            </button>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default WideModal;

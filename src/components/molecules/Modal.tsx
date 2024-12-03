import { motion } from "framer-motion";
import { FC, ReactNode, HTMLAttributes, useState } from "react";
import { scaleExitAnimation } from "@constants";
import Image from "next/image";
import { useLockBodyScroll } from "src/hooks";
import { ModalScrollBar } from "@components";
import Draggable from "react-draggable";

interface Props extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  children: ReactNode;
  title: string;
  titleSrc: string;
}
const Modal: FC<Props> = (props: Props) => {
  const { show, children, titleSrc, title, className, ...componentProps } =
    props;

  const [maximize, setMaximize] = useState<boolean>(false);
  const [minimize, setMinimize] = useState<boolean>(false);
  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(
    null
  );
  const [scrollbarPosition, setScrollbarPosition] = useState<number>(0);

  useLockBodyScroll(show);

  const scrollContent = (direction: "up" | "down") => {
    const container = document.querySelector(".modal-content-container");

    if (container) {
      const scrollAmount = 50; // Adjust this value as needed
      container.scrollBy({
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (direction: "up" | "down") => {
    scrollContent(direction); // Initial scroll
    const interval = setInterval(() => scrollContent(direction), 100); // Adjust interval as needed
    setScrollInterval(interval);
  };

  const handleMouseUp = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  };

  const handleScroll = () => {
    const container = document.querySelector(".modal-content-container");
    const scrollbar = document.querySelector(".modal-scrollbar-container");

    // if (container && scrollbar) {
    //   const scrollToolHeight = 407;
    //   // Get the current scroll position from the top of the container
    //   const scrollTop = container.scrollTop;
    //   console.log("1. scrollTop", scrollTop);

    //   // Calculate the total scrollable height of the container
    //   const scrollHeight = container.scrollHeight - container.clientHeight;
    //   console.log("2. scrollHeight", scrollHeight);

    //   // Get the height of the scrollbar
    //   const scrollbarHeight = scrollbar.clientHeight;
    //   console.log("3. scrollbarHeight", scrollbarHeight);

    //   // Get the height of the container
    //   const containerHeight = container.clientHeight;
    //   console.log("4. containerHeight", containerHeight);

    //   //--

    //   // Calculate the maximum scrollable top position, adjusting for the scrollbar height
    //   const maxScrollTop = scrollbarHeight - scrollToolHeight; //scrollHeight - (scrollbarHeight - containerHeight);
    //   console.log(
    //     "5.  ----->  maxScrollTop",
    //     maxScrollTop,
    //     scrollbarHeight - containerHeight
    //   );

    //   // Calculate the scroll percentage based on the current scroll position and the maximum scrollable top position
    //   const scrollPercentage = scrollTop / maxScrollTop;
    //   console.log("6. scrollPercentage", scrollPercentage);

    //   // Set the scrollbar position based on the calculated scroll percentage
    //   setScrollbarPosition(scrollPercentage * 100);
    // }
    if (container) {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const scrollPercentage = scrollTop / scrollHeight;
      setScrollbarPosition(scrollPercentage * 100);
    }
  };
  const handleDrag = (position: number) => {
    const container = document.querySelector(".modal-content-container");
    if (container) {
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const newScrollTop = (position / 100) * scrollHeight;
      container.scrollTop = newScrollTop;
    }
  };

  return (
    <motion.div
      key="image-modal"
      className="fixed inset-0 w-screen h-screen z-50"
      onClick={componentProps.onClick}
      {...scaleExitAnimation}
    >
      {/* <Draggable bounds="parent"> */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`modal-container left-1/2 top-1/2 lg:top-[48%] transform -translate-x-1/2 -translate-y-1/2 
          ${className} ${
          maximize
            ? "modal-miximized"
            : "h-[85svh] lg:h-[695px] w-[94vw] lg:w-[846px] "
          // ? "w-[99vw] top-1 bottom-[47px] left-1/2 transform -translate-x-1/2"
          // : "h-[85svh] lg:h-[695px] w-[94vw] lg:w-[846px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }`}
      >
        {/* blue header */}
        <div className="bg-custom-blue-500 w-full min-h-[42px] flex justify-between p-1 cursor-pointer">
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
        {/* text file "buttons" */}
        <div className="min-h-[42px] w-full flex items-center gap-5 text-custom-gray-900 text-sm px-3">
          <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Go</p>
          <p>Favorites</p>
          <p>Help</p>
        </div>
        {/* body */}
        <div className="flex overflow-hidden w-full h-full">
          {/* content */}
          <div className="model-content-container-outline pt-[5px] w-full h-full">
            <div
              className="modal-content-container justify-center w-full h-full"
              onScroll={handleScroll}
            >
              <div className="min-h-[800px]">{children}</div>
            </div>
          </div>
          {/* scroll */}
          {/* <div className="relative flex flex-col items-center justify-between h-full ml-1">
            <button
              onMouseDown={() => handleMouseDown("up")}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="z-10"
            >
              <Image
                src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/scroll-up.svg`}
                width={34}
                height={36}
                alt="up"
              />
            </button>

            <ModalScrollBar position={scrollbarPosition} onDrag={handleDrag} />
             <button
              onMouseDown={() => handleMouseDown("down")}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="z-10"
            >
              <Image
                src={`${process.env.CLOUDFLARE_STORAGE}/images/buttons/scroll-down.svg`}
                width={34}
                height={36}
                alt="down"
              />
            </button> *
          </div> */}
        </div>
      </div>
      {/* </Draggable> */}
    </motion.div>
  );
};

export default Modal;

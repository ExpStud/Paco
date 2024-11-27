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
    if (container) {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const scrollPercentage = scrollTop / scrollHeight;
      setScrollbarPosition(scrollPercentage * 100);
    }
  };

  return (
    <motion.div
      key="image-modal"
      className="fixed inset-0 w-screen h-screen z-50"
      onClick={componentProps.onClick}
      {...scaleExitAnimation}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`modal-container 
          ${className} ${
          maximize
            ? "w-[99vw] h-[99svh]"
            : "h-[85svh] lg:h-[695px] w-[94vw] lg:w-[846px]"
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
              src="/images/buttons/minimize.svg"
              width={30}
              height={30}
              alt="minimize"
              className="cursor-pointer"
              onClick={() => setMinimize(!minimize)}
            />
            <Image
              src="/images/buttons/maximize.svg"
              width={30}
              height={30}
              alt="maximize"
              className="cursor-pointer mr-1"
              onClick={() => setMaximize(!maximize)}
            />
            <Image
              src="/images/buttons/close.svg"
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
        <div className="flex overflow-hidden">
          <div className="modal-content-container" onScroll={handleScroll}>
            <div className="min-h-[1200px]">{children}</div>
          </div>
          {/* scroll */}
          <div className="relative flex flex-col items-center justify-between h-full ml-1">
            <button
              onMouseDown={() => handleMouseDown("up")}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <Image
                src="/images/buttons/scroll-up.svg"
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
                src="/images/buttons/scroll-down.svg"
                width={34}
                height={36}
                alt="down"
              />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// const ScrollBar: FC<{ position: number }> = ({ position }) => {
//   return (
//     <div
//       className="relative h-full flex-grow -z-10"
//       style={{ paddingBottom: "36px" }}
//     >
//       <svg
//         width="34"
//         height="408"
//         viewBox="0 0 34 408"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         style={{ transform: `translateY(calc(${position}% - 36px))` }}
//       >
//         <g filter="url(#filter0_iiii_361_1137)">
//           <rect y="0.125" width="34" height="407" fill="#B8C0C1" />
//         </g>
//         <defs>
//           <filter
//             id="filter0_iiii_361_1137"
//             x="0"
//             y="0.125"
//             width="34"
//             height="407"
//             filterUnits="userSpaceOnUse"
//             color-interpolation-filters="sRGB"
//           >
//             <feFlood flood-opacity="0" result="BackgroundImageFix" />
//             <feBlend
//               mode="normal"
//               in="SourceGraphic"
//               in2="BackgroundImageFix"
//               result="shape"
//             />
//             <feColorMatrix
//               in="SourceAlpha"
//               type="matrix"
//               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//               result="hardAlpha"
//             />
//             <feOffset dx="4.25" dy="4.25" />
//             <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
//             <feColorMatrix
//               type="matrix"
//               values="0 0 0 0 0.87451 0 0 0 0 0.87451 0 0 0 0 0.87451 0 0 0 1 0"
//             />
//             <feBlend
//               mode="normal"
//               in2="shape"
//               result="effect1_innerShadow_361_1137"
//             />
//             <feColorMatrix
//               in="SourceAlpha"
//               type="matrix"
//               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//               result="hardAlpha"
//             />
//             <feOffset dx="-4.25" dy="-4.25" />
//             <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
//             <feColorMatrix
//               type="matrix"
//               values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 1 0"
//             />
//             <feBlend
//               mode="normal"
//               in2="effect1_innerShadow_361_1137"
//               result="effect2_innerShadow_361_1137"
//             />
//             <feColorMatrix
//               in="SourceAlpha"
//               type="matrix"
//               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//               result="hardAlpha"
//             />
//             <feOffset dx="2.125" dy="2.125" />
//             <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
//             <feColorMatrix
//               type="matrix"
//               values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
//             />
//             <feBlend
//               mode="normal"
//               in2="effect2_innerShadow_361_1137"
//               result="effect3_innerShadow_361_1137"
//             />
//             <feColorMatrix
//               in="SourceAlpha"
//               type="matrix"
//               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//               result="hardAlpha"
//             />
//             <feOffset dx="-2.125" dy="-2.125" />
//             <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
//             <feColorMatrix
//               type="matrix"
//               values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 1 0"
//             />
//             <feBlend
//               mode="normal"
//               in2="effect3_innerShadow_361_1137"
//               result="effect4_innerShadow_361_1137"
//             />
//           </filter>
//         </defs>
//       </svg>
//     </div>
//   );
// };
export default Modal;

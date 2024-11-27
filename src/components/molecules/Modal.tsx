import { motion } from "framer-motion";
import { FC, ReactNode, useEffect, HTMLAttributes, useState } from "react";
import { midClickAnimation, scaleExitAnimation } from "@constants";
import Image from "next/image";
import { useLockBodyScroll } from "src/hooks";

interface Props extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  children: ReactNode;
  title: string;
  titleSrc: string;
}
const Modal: FC<Props> = (props: Props) => {
  const { show, children, className, ...componentProps } = props;

  const [maximize, setMaximize] = useState<boolean>(false);
  const [minimize, setMinimize] = useState<boolean>(false);

  useLockBodyScroll(show);

  return (
    <motion.div
      key="image-modal"
      className="fixed inset-0 w-screen h-screen z-50"
      onClick={componentProps.onClick}
      {...scaleExitAnimation}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`modal-container absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden p-1
          ${className} ${
          maximize
            ? "w-[99vw] h-[99svh]"
            : " h-[96svh] lg:h-[695px] w-[96vw] lg:w-[846px]"
        }`}
      >
        <div className="bg-custom-blue-500 w-full h-[42px] flex justify-between p-1">
          <div></div>
          <div className="flex">
            <Image
              src="/images/buttons/minimize.svg"
              width={30}
              height={30}
              alt="minimize"
              className="cursor-pointer"
            />
            <Image
              src="/images/buttons/maximize.svg"
              width={30}
              height={30}
              alt="maximize"
              className="cursor-pointer mr-1"
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
        {children}
      </div>
    </motion.div>
  );
};

export default Modal;

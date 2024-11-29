import { motion } from "framer-motion";
import { FC } from "react";

const ModalScrollBar: FC<{ position: number }> = ({ position }) => {
  // console.log("ModalScrollBar ", position);
  return (
    <div
      className="relative h-full flex-grow -z-10"
      style={{ paddingBottom: "36px", paddingTop: "36px" }}
    >
      <motion.svg
        width="34"
        height="408"
        viewBox="0 0 34 408"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: `calc(${position}% - 36px)` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <g filter="url(#filter0_iiii_361_1137)">
          <rect y="0.125" width="34" height="407" fill="#B8C0C1" />
        </g>
        <defs>
          <filter
            id="filter0_iiii_361_1137"
            x="0"
            y="0.125"
            width="34"
            height="407"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4.25" dy="4.25" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.87451 0 0 0 0 0.87451 0 0 0 0 0.87451 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_361_1137"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-4.25" dy="-4.25" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_361_1137"
              result="effect2_innerShadow_361_1137"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2.125" dy="2.125" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_361_1137"
              result="effect3_innerShadow_361_1137"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-2.125" dy="-2.125" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect3_innerShadow_361_1137"
              result="effect4_innerShadow_361_1137"
            />
          </filter>
        </defs>
      </motion.svg>
    </div>
  );
};

export default ModalScrollBar;

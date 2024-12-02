import { FC, SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  color: "white" | "black";
  handleClick: (size: string) => void;
  selectedColor?: number;
}

const ColorSelectIcon: FC<Props> = (props: Props) => {
  const { selectedColor, color, handleClick } = props;

  if (color === "white") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => handleClick(color)}
        className="cursor-pointer color-icon"
      >
        <g filter="url(#filter0_iiii_687_746)">
          <path
            d="M0.860352 0.813477H21.2337V21.1869H0.860352V0.813477Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_iiii_687_746"
            x="0.860352"
            y="0.813477"
            width="20.3733"
            height="20.373"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            <feOffset dx="2.71645" dy="2.71645" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_687_746"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-2.71645" dy="-2.71645" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.87451 0 0 0 0 0.87451 0 0 0 0 0.87451 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_687_746"
              result="effect2_innerShadow_687_746"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1.35823" dy="1.35823" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_687_746"
              result="effect3_innerShadow_687_746"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1.35823" dy="-1.35823" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect3_innerShadow_687_746"
              result="effect4_innerShadow_687_746"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  return (
    <svg
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => handleClick(color)}
      className="cursor-pointer color-icon"
    >
      <g filter="url(#filter0_iiii_687_745)">
        <path
          d="M0.128662 0.813477H20.502V21.1869H0.128662V0.813477Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_iiii_687_745"
          x="0.128662"
          y="0.813477"
          width="20.3733"
          height="20.373"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
          <feOffset dx="2.71645" dy="2.71645" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_687_745"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2.71645" dy="-2.71645" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.87451 0 0 0 0 0.87451 0 0 0 0 0.87451 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_687_745"
            result="effect2_innerShadow_687_745"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1.35823" dy="1.35823" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_687_745"
            result="effect3_innerShadow_687_745"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-1.35823" dy="-1.35823" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_innerShadow_687_745"
            result="effect4_innerShadow_687_745"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ColorSelectIcon;

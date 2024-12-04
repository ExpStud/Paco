import React, { HTMLAttributes, useState } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {}
const XxxButton: React.FC<Props> = (props: Props) => {
  const { className, ...componentProps } = props;

  return (
    <button
      style={{
        border: "none",
        background: "none",
        padding: 0,
        cursor: "pointer",
      }}
      {...componentProps}
      className="group"
    >
      <svg
        width="244"
        height="36"
        viewBox="0 0 244 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g filter="url(#filter0_iiii_361_906)">
          <rect
            width="242.782"
            height="35.1043"
            transform="translate(0.53418 0.551758)"
            fill="#B8C0C1"
            className="analog-button"
          />
          <rect
            x="5.08667"
            y="5.10352"
            width="24.2782"
            height="24.2782"
            fill="url(#pattern0_361_906)"
          />
          <path
            d="M36.1341 22.1035C36.0594 22.1035 35.9894 22.0755 35.9241 22.0195C35.8681 21.9635 35.8401 21.8935 35.8401 21.8095C35.8401 21.7815 35.8447 21.7488 35.8541 21.7115C35.8727 21.6648 35.9007 21.6135 35.9381 21.5575L38.3741 18.3795L36.0921 15.3695C36.0547 15.3135 36.0267 15.2668 36.0081 15.2295C35.9987 15.1922 35.9941 15.1548 35.9941 15.1175C35.9941 15.0335 36.0221 14.9635 36.0781 14.9075C36.1341 14.8515 36.2041 14.8235 36.2881 14.8235H37.0021C37.1047 14.8235 37.1794 14.8515 37.2261 14.9075C37.2821 14.9542 37.3287 15.0008 37.3661 15.0475L39.2281 17.4695L41.0901 15.0615C41.1274 15.0148 41.1694 14.9635 41.2161 14.9075C41.2721 14.8515 41.3514 14.8235 41.4541 14.8235H42.1401C42.2241 14.8235 42.2941 14.8515 42.3501 14.9075C42.4061 14.9635 42.4341 15.0335 42.4341 15.1175C42.4341 15.1548 42.4247 15.1922 42.4061 15.2295C42.3967 15.2668 42.3734 15.3135 42.3361 15.3695L40.0261 18.4075L42.4621 21.5575C42.4994 21.6135 42.5227 21.6602 42.5321 21.6975C42.5507 21.7348 42.5601 21.7722 42.5601 21.8095C42.5601 21.8935 42.5321 21.9635 42.4761 22.0195C42.4201 22.0755 42.3501 22.1035 42.2661 22.1035H41.5241C41.4307 22.1035 41.3561 22.0802 41.3001 22.0335C41.2441 21.9868 41.1974 21.9402 41.1601 21.8935L39.1861 19.3315L37.2121 21.8935C37.1747 21.9308 37.1281 21.9775 37.0721 22.0335C37.0254 22.0802 36.9507 22.1035 36.8481 22.1035H36.1341ZM43.681 22.1035C43.6063 22.1035 43.5363 22.0755 43.471 22.0195C43.415 21.9635 43.387 21.8935 43.387 21.8095C43.387 21.7815 43.3916 21.7488 43.401 21.7115C43.4196 21.6648 43.4476 21.6135 43.485 21.5575L45.921 18.3795L43.639 15.3695C43.6016 15.3135 43.5736 15.2668 43.555 15.2295C43.5456 15.1922 43.541 15.1548 43.541 15.1175C43.541 15.0335 43.569 14.9635 43.625 14.9075C43.681 14.8515 43.751 14.8235 43.835 14.8235H44.549C44.6516 14.8235 44.7263 14.8515 44.773 14.9075C44.829 14.9542 44.8756 15.0008 44.913 15.0475L46.775 17.4695L48.637 15.0615C48.6743 15.0148 48.7163 14.9635 48.763 14.9075C48.819 14.8515 48.8983 14.8235 49.001 14.8235H49.687C49.771 14.8235 49.841 14.8515 49.897 14.9075C49.953 14.9635 49.981 15.0335 49.981 15.1175C49.981 15.1548 49.9716 15.1922 49.953 15.2295C49.9436 15.2668 49.9203 15.3135 49.883 15.3695L47.573 18.4075L50.009 21.5575C50.0463 21.6135 50.0696 21.6602 50.079 21.6975C50.0976 21.7348 50.107 21.7722 50.107 21.8095C50.107 21.8935 50.079 21.9635 50.023 22.0195C49.967 22.0755 49.897 22.1035 49.813 22.1035H49.071C48.9776 22.1035 48.903 22.0802 48.847 22.0335C48.791 21.9868 48.7443 21.9402 48.707 21.8935L46.733 19.3315L44.759 21.8935C44.7216 21.9308 44.675 21.9775 44.619 22.0335C44.5723 22.0802 44.4976 22.1035 44.395 22.1035H43.681ZM51.2278 22.1035C51.1532 22.1035 51.0832 22.0755 51.0178 22.0195C50.9618 21.9635 50.9338 21.8935 50.9338 21.8095C50.9338 21.7815 50.9385 21.7488 50.9478 21.7115C50.9665 21.6648 50.9945 21.6135 51.0318 21.5575L53.4678 18.3795L51.1858 15.3695C51.1485 15.3135 51.1205 15.2668 51.1018 15.2295C51.0925 15.1922 51.0878 15.1548 51.0878 15.1175C51.0878 15.0335 51.1158 14.9635 51.1718 14.9075C51.2278 14.8515 51.2978 14.8235 51.3818 14.8235H52.0958C52.1985 14.8235 52.2732 14.8515 52.3198 14.9075C52.3758 14.9542 52.4225 15.0008 52.4598 15.0475L54.3218 17.4695L56.1838 15.0615C56.2212 15.0148 56.2632 14.9635 56.3098 14.9075C56.3658 14.8515 56.4452 14.8235 56.5478 14.8235H57.2338C57.3178 14.8235 57.3878 14.8515 57.4438 14.9075C57.4998 14.9635 57.5278 15.0335 57.5278 15.1175C57.5278 15.1548 57.5185 15.1922 57.4998 15.2295C57.4905 15.2668 57.4672 15.3135 57.4298 15.3695L55.1198 18.4075L57.5558 21.5575C57.5932 21.6135 57.6165 21.6602 57.6258 21.6975C57.6445 21.7348 57.6538 21.7722 57.6538 21.8095C57.6538 21.8935 57.6258 21.9635 57.5698 22.0195C57.5138 22.0755 57.4438 22.1035 57.3598 22.1035H56.6178C56.5245 22.1035 56.4498 22.0802 56.3938 22.0335C56.3378 21.9868 56.2912 21.9402 56.2538 21.8935L54.2798 19.3315L52.3058 21.8935C52.2685 21.9308 52.2218 21.9775 52.1658 22.0335C52.1192 22.0802 52.0445 22.1035 51.9418 22.1035H51.2278Z"
            fill="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_iiii_361_906"
            x="0.53418"
            y="0.551758"
            width="242.782"
            height="35.1045"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
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
            <feOffset dx="2" dy="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_361_906"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-2" dy="-2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.87451 0 0 0 0 0.87451 0 0 0 0 0.87451 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_361_906"
              result="effect2_innerShadow_361_906"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_361_906"
              result="effect3_innerShadow_361_906"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect3_innerShadow_361_906"
              result="effect4_innerShadow_361_906"
            />
          </filter>
          <pattern
            id="pattern0_361_906"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_361_906" transform="scale(0.0625)" />
          </pattern>
          <image
            id="image0_361_906"
            width="16"
            height="16"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAFVBMVEUAAACAgIAAAAD//////wDAwMAAAP9byAirAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBhgXAzMAIR3ZAAAAXklEQVQI12WLsQ2AMAwETSR6Ei9gsgExYQCkDBDkDbL/DrxT0HDV6fVH9LHELUxhPVh8OK1riZDa+NJdsHQdowjFiQq+II2HuIF79Y+Z9SxeAVTEWCxBZuUSsiP04wVZaQ9MNxasFgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNFQyMzowMzo1MS0wNDowMF7UzGYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjRUMjM6MDM6NTEtMDQ6MDAviXTaAAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    </button>
  );
};

export default XxxButton;

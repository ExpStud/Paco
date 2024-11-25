import { FC, SVGProps } from "react";
import Image from "next/image";
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
  url?: string;
}

const TwitterIcon: FC<Props> = (props: Props) => {
  const { color = "white", size = 35, url = "" } = props;
  return (
    <a href={url} rel="noreferrer" target="_blank">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.0352 32H15.9648C7.1619 32 0 24.8381 0 16.0352V15.9648C0 7.16189 7.1619 0 15.9648 0H16.0352C24.8381 0 32 7.16189 32 15.9648V16.0352C32 24.8381 24.8381 32 16.0352 32ZM15.9648 1.08317C7.75873 1.08317 1.08317 7.75871 1.08317 15.9648V16.0352C1.08317 24.2413 7.75873 30.9168 15.9648 30.9168H16.0352C24.2413 30.9168 30.9168 24.2413 30.9168 16.0352V15.9648C30.9168 7.75871 24.2413 1.08317 16.0352 1.08317H15.9648Z"
          fill="#D4CFBE"
        />
        <path
          d="M6.81199 7.54102L13.9414 17.0729L6.76758 24.823H8.38258L14.6639 18.038L19.7385 24.823H25.2334L17.7032 14.7549L24.381 7.54102H22.766L16.9818 13.7898L12.308 7.54102H6.81306H6.81199ZM9.18629 8.73036H11.7101L22.8569 23.6336H20.3332L9.18629 8.73036Z"
          fill="#383D38"
        />
      </svg>
    </a>
  );
};

export default TwitterIcon;

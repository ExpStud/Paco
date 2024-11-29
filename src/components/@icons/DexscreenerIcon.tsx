import { FC, SVGProps } from "react";
import Image from "next/image";
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
  url?: string;
}

const DexscreenerIcon: FC<Props> = (props: Props) => {
  const { color = "white", size = 30, url = "" } = props;
  return (
    <a href={url} rel="noreferrer" target="_blank">
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/icons/dexscreener.png`}
        width={32}
        height={32}
        alt="Dexscreener"
      />
    </a>
  );
};

export default DexscreenerIcon;

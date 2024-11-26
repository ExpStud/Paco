import { Dispatch, SetStateAction, FC } from "react";
import { handleAssetLoad } from "@utils";
import Image from "next/image";
import { isMobile } from "react-device-detect";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="w-full h-full relative">
      <Image
        src={`/images/desktop/rocheco@${isMobile ? "2" : "3"}x.png`}
        alt="rocheco"
        width={623}
        height={528}
        className="absolute-center"
        onLoadingComplete={() => handleAssetLoad(0, setAssets)}
      />
      <div className="absolute bottom-0 xs:bottom-24 xl:bottom-1/4  left-2 xs:left-14 flex flex-col items-end scale-75 xs:scale-100">
        <Image
          src={`/images/desktop/post-it-note.svg`}
          alt="post it note"
          width={147}
          height={164}
        />
        <Image
          src={`/images/desktop/click-to-copy.svg`}
          alt="click to copy"
          width={106}
          height={20}
          className="-mt-4"
        />
      </div>
    </div>
  );
};

export default LandingView;

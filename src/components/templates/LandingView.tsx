import { Dispatch, SetStateAction, FC, useContext, useState } from "react";
import { handleAssetLoad } from "@utils";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import { DesktopIcon } from "@components";
import { ViewContext } from "@contexts";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const {
    showReplyGuyModal,
    showMemeGeneratorModal,
    showTokenomicsModal,
    showTrashModal,
    setShowReplyGuyModal,
    setShowMemeGeneratorModal,
    setShowTokenomicsModal,
    setShowTrashModal,
  } = useContext(ViewContext);

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const textToCopy = "Your text to copy"; // Replace with the text you want to copy
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        console.log("Text copied to clipboard");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Hide the checkmark after 2 seconds
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  return (
    <div className="w-full h-full relative">
      {/* desktop icons */}
      <DesktopIcon
        icon="reply-guy"
        name="Reply guy folder"
        onDoubleClick={() => {
          if (!isMobile) setShowReplyGuyModal(true);
        }}
        onClick={() => {
          if (isMobile) setShowReplyGuyModal(true);
        }}
        className="top-[20vh] right-[2vw] md:right-[6vw] 1420:right-0 "
        highlight={showReplyGuyModal}
      />
      {/* <DesktopIcon
        icon="meme-generator"
        name="Meme Generator"
        onDoubleClick={() => {
          if (!isMobile) setShowMemeGeneratorModal(true);
        }}
        onClick={() => {
          if (isMobile) setShowMemeGeneratorModal(true);
        }}
        className="top-[36vh] right-[2vw] md:right-[6vw] 1420:right-0 mr-1"
        highlight={showMemeGeneratorModal}
      /> */}
      <DesktopIcon
        icon="tokenomics"
        name="Tokenomics"
        onDoubleClick={() => {
          if (!isMobile) setShowTokenomicsModal(true);
        }}
        onClick={() => {
          if (isMobile) setShowTokenomicsModal(true);
        }}
        className="top-[60vh] md:top-[52vh] right-[2vw] md:right-[6vw] 1420:right-0 mr-4"
        highlight={showTokenomicsModal}
      />
      {/* <DesktopIcon
        icon="trash"
        name="Trasssshhh"
        onDoubleClick={() => {
          if (!isMobile) setShowTrashModal(true);
        }}
        onClick={() => {
          if (isMobile) setShowTrashModal(true);
        }}
        className="top-[82vh] right-[8vw] md:right-[6vw] 1420:right-0 mr-4"
        highlight={showTrashModal}
      /> */}

      {/* paco */}
      <Image
        src={`/images/desktop/rocheco.png`}
        alt="rocheco"
        width={623}
        height={528}
        className="absolute-center z-0"
        onLoad={() => handleAssetLoad(0, setAssets)}
      />
      {/* post it */}
      <div
        className="absolute bottom-0 xs:bottom-24 xl:bottom-1/4 left-2 xs:left-14 xl:left-0 flex flex-col items-end scale-75 xs:scale-100 cursor-pointer transition-300"
        onClick={copyToClipboard}
      >
        <Image
          src={`/images/desktop/post-it-note.svg`}
          alt="post it note"
          width={147}
          height={164}
        />
        <div className="relative">
          <Image
            src={`/images/desktop/click-to-copy.svg`}
            alt="click to copy"
            width={106}
            height={20}
            className="-mt-4"
          />
          {isCopied && (
            <span className="text-green-500 text-2xl absolute -right-8 bottom-0">
              ✅
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingView;

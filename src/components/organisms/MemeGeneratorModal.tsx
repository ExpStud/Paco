import { FC, useState } from "react";
import { WideModal } from "@components";
import { REPLY_GUY_ASSETS } from "@constants";
import Image from "next/image";
import { DownloadableAsset } from "src/types";

interface Props {
  show: boolean;
  close: () => void;
}

const MemeGeneratorModal: FC<Props> = (props: Props) => {
  const { show, close } = props;

  const [selectedMeme, setSelectedMeme] = useState<DownloadableAsset>(
    REPLY_GUY_ASSETS[0]
  );

  return (
    <WideModal
      show={show}
      onClick={() => close()}
      title={"Meme Generator"}
      titleSrc="meme-generator.png"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-around items-start gap-5 ">
        {/* selector */}
        <div className="meme-selector-container overflow-auto">
          <div className="flex flex-col h-full justify-between pt-1">
            <div className="meme-selector-bg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center items-center py-5 px-6 lg:w-[540px] lg:h-[461px]">
              {REPLY_GUY_ASSETS.map((item) => {
                const isSelected = selectedMeme.src === item.src;
                return (
                  <div
                    className={`border-4  relative cursor-pointer transition-200 ${
                      isSelected ? "border-custom-blue-500" : "border-white"
                    }`}
                    key={item.src}
                    onClick={() => setSelectedMeme(item)}
                  >
                    <Image
                      src={`${process.env.CLOUDFLARE_STORAGE}/images/modals/downloads/${item.src}`}
                      alt={item.src}
                      width={110}
                      height={110}
                      className="object-cover aspect-square"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* image + actions */}
        <div className="flex flex-col lg:h-full justify-between">
          <div className="col-centered w-[304px] md:w-[442px] lg:w-[461px] lg:h-[461px]">
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/modals/downloads/${selectedMeme.src}`}
              alt={selectedMeme.downloadSrc}
              width={461}
              height={461}
              className="meme-image-container w-full lg:w-auto max-w-[461px] lg:h-[461px] object-contain"
            />
          </div>
        </div>
      </div>
    </WideModal>
  );
};

export default MemeGeneratorModal;

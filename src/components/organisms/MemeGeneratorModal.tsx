import { FC, use, useEffect, useRef, useState } from "react";
import {
  DownloadButton,
  ResetButton,
  ShareButton,
  TextInput,
  WideModal,
} from "@components";
import { REPLY_GUY_ASSETS } from "@constants";
import Image from "next/image";
import { DownloadableAsset } from "src/types";
import Draggable from "react-draggable";
import html2canvas from "html2canvas";

interface Props {
  show: boolean;
  close: () => void;
}

const MemeGeneratorModal: FC<Props> = (props: Props) => {
  const { show, close } = props;

  const [selectedMeme, setSelectedMeme] = useState<DownloadableAsset>(
    REPLY_GUY_ASSETS[0]
  );
  const [text, setText] = useState<string>("");
  const [color, setColor] = useState<"text-black" | "text-white">("text-black");
  const [fontSize, setFontSize] = useState<
    "text-[10px]" | "text-[14px]" | "text-[18px]"
  >("text-[14px]");
  const [resetInput, setResetInput] = useState<boolean>(false);

  const memeRef = useRef<HTMLDivElement>(null);

  const handleInput = (value: string) => {
    setText(value);
  };
  const handleColorChange = (value: string) => {
    setColor(value === "black" ? "text-black" : "text-white");
  };
  const handleFontSizeChange = (value: number) => {
    setFontSize(
      value === 10
        ? "text-[10px]"
        : value === 14
        ? "text-[14px]"
        : "text-[18px]"
    );
  };

  const download = () => {
    if (memeRef.current === null) {
      return;
    }

    html2canvas(memeRef.current)
      .then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "meme.png";
        link.click();
      })
      .catch((err) => {
        console.error("Failed to generate image", err);
      });
  };
  const reset = () => {
    setText("");
    setColor("text-black");
    setFontSize("text-[14px]");
    setResetInput(true);
  };
  const share = () => {};

  //reset data and input when meme changes
  useEffect(() => {
    reset();
  }, [selectedMeme]);

  useEffect(() => {
    if (resetInput) {
      setResetInput(false); // Reset the state after notifying TextInput
    }
  }, [resetInput]);

  return (
    <WideModal
      show={show}
      onClick={() => close()}
      title={"Meme Generator"}
      titleSrc="meme-generator.png"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-around items-start gap-5">
        {/* selector */}
        <div className="flex flex-col justify-between  h-full max-h-[535px]">
          <div className="meme-selector-container p-1">
            <div className="bg-[#e4e4e4] overflow-auto">
              <div className="meme-selector-bg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center items-center py-8 px-6 lg:w-[517px] lg:h-[453px]">
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
          <TextInput
            handleInput={handleInput}
            handleColorChange={handleColorChange}
            handleFontSizeChange={handleFontSizeChange}
            resetInput={resetInput}
          />
        </div>
        {/* image + actions */}
        <div className="flex flex-col lg:h-full justify-between">
          <div className="col-centered lg:w-[461px] lg:h-[461px] relative">
            <div className="relative" ref={memeRef}>
              <Image
                key={selectedMeme.src}
                src={`${process.env.CLOUDFLARE_STORAGE}/images/modals/downloads/${selectedMeme.src}`}
                alt={selectedMeme.downloadSrc}
                width={461}
                height={461}
                className="meme-image-container lg:w-auto w-auto lg:max-w-[461px] h-[300px] md:h-[369px] lg:h-[461px] object-contain"
              />
              <Draggable bounds="parent">
                <div
                  className={`absolute top-10 right-10 cursor-pointer ${color} ${fontSize}`}
                >
                  {text}
                </div>
              </Draggable>
            </div>
          </div>
          <div className="flex justify-between items-end w-full gap-4">
            <DownloadButton onClick={download} />
            <ResetButton onClick={reset} />
            <ShareButton onClick={share} />
          </div>
        </div>
      </div>
    </WideModal>
  );
};

export default MemeGeneratorModal;

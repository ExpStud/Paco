import { FC } from "react";
import { Modal } from "@components";
import { REPLY_GUY_ASSETS } from "src/constants";
import Image from "next/image";

interface Props {
  show: boolean;
  close: () => void;
}

const ReplyGuyModal: FC<Props> = (props: Props) => {
  const { show, close } = props;

  return (
    <Modal
      show={show}
      onClick={() => close()}
      title={"Reply guy folder"}
      titleSrc="reply-guy.png"
    >
      <div className="grid grid-cols-1 500:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 justify-center items-center py-10 px-12">
        {REPLY_GUY_ASSETS.map((item) => (
          <div className="asset-container relative p-[5px]" key={item.src}>
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/modals/downloads/${item.src}`}
              alt={item.src}
              width={300}
              height={300}
              className="object-cover aspect-square"
            />
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/icons/download.svg`}
              alt="download"
              width={24}
              height={24}
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={() =>
                window.open(
                  `${process.env.CLOUDFLARE_STORAGE}/images/modals/downloads/${item.downloadSrc}`,
                  "_blank"
                )
              }
            />
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ReplyGuyModal;

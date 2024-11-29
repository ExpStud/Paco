import { FC } from "react";
import { Modal } from "@components";
import Image from "next/image";
import { isMobile } from "react-device-detect";

interface Props {
  show: boolean;
  close: () => void;
}

const TokenomicsModal: FC<Props> = (props: Props) => {
  const { show, close } = props;

  return (
    <Modal
      show={show}
      onClick={() => close()}
      title={"Tokenomics"}
      titleSrc="tokenomics.png"
    >
      <div className="relative w-full h-full px-1 pb-1">
        <Image
          src={`${
            process.env.CLOUDFLARE_STORAGE
          }/images/modals/tokenomics/tokenomics${isMobile ? "" : "-lg"}.jpg`}
          alt={"Tokenomics"}
          width={1018}
          height={2486}
          className="w-screen"
        />
      </div>
    </Modal>
  );
};

export default TokenomicsModal;

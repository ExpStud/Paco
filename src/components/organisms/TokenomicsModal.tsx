import { FC } from "react";
import { Modal } from "@components";

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
      <div>Add content</div>
    </Modal>
  );
};

export default TokenomicsModal;

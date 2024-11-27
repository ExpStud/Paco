import { FC } from "react";
import { Modal } from "@components";

interface Props {
  show: boolean;
  close: () => void;
}

const MemeGenerator: FC<Props> = (props: Props) => {
  const { show, close } = props;

  return (
    <Modal
      show={show}
      onClick={() => close()}
      title={"Meme Generator"}
      titleSrc="meme-generator.png"
    >
      <div>Add content</div>
    </Modal>
  );
};

export default MemeGenerator;

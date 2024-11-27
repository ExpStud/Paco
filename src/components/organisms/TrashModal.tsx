import { FC } from "react";
import { Modal } from "@components";

interface Props {
  show: boolean;
  close: () => void;
}

const TrashModal: FC<Props> = (props: Props) => {
  const { show, close } = props;

  return (
    <Modal
      show={show}
      onClick={() => close()}
      title={"Trasssshhh"}
      titleSrc="trash.png"
    >
      <div>Add content</div>
    </Modal>
  );
};

export default TrashModal;

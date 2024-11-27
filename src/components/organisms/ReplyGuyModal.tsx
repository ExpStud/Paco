import { FC } from "react";
import { Modal } from "@components";

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
      <div>Add content</div>
    </Modal>
  );
};

export default ReplyGuyModal;

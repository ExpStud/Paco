import { FC, ReactNode, useState } from "react";
import {
  PageHead,
  Header,
  Footer,
  SplashScreen,
  ReplyGuyModal,
  MemeGeneratorModal,
  TokenomicsModal,
  TrashModal,
} from "@components";
import { enterAnimation, fastEnterAnimation } from "@constants";
import { AnimatePresence, motion } from "framer-motion";
import { ViewContext } from "@contexts";

interface Props {
  children: ReactNode;
  assets?: boolean[];
}

const PageLayout: FC<Props> = (props: Props) => {
  const { children, assets = [] } = props;

  //context for splash screen & modals
  const [showView, setShowView] = useState<boolean>(false);
  const [showReplyGuyModal, setShowReplyGuyModal] = useState<boolean>(false);
  const [showMemeGeneratorModal, setShowMemeGeneratorModal] =
    useState<boolean>(false);
  const [showTokenomicsModal, setShowTokenomicsModal] =
    useState<boolean>(false);
  const [showTrashModal, setShowTrashModal] = useState<boolean>(false);
  const value = {
    showView,
    setShowView,
    showReplyGuyModal,
    setShowReplyGuyModal,
    showMemeGeneratorModal,
    setShowMemeGeneratorModal,
    showTokenomicsModal,
    setShowTokenomicsModal,
    showTrashModal,
    setShowTrashModal,
  };

  return (
    <ViewContext.Provider value={value}>
      <div className="flex flex-col h-[100svh] justify-between items-center overflow-none">
        <PageHead
          title="Paco"
          description="Description"
          url="https://addurl.xyz" // no backslash at the end
          twitter="twitterhandle"
        />
        <Header />

        {/* body */}
        <motion.main
          className="max-width flex flex-col flex-grow w-full overflow-x-hidden"
          {...fastEnterAnimation}
        >
          {children}
        </motion.main>
        <Footer />

        {/* load screen */}
        {/* {assets && <SplashScreen assets={assets} />} */}

        {/* modals */}
        <AnimatePresence mode="wait">
          {showReplyGuyModal && (
            <ReplyGuyModal
              key="reply"
              show={showReplyGuyModal}
              close={() => setShowReplyGuyModal(false)}
            />
          )}
          {showMemeGeneratorModal && (
            <MemeGeneratorModal
              key="meme"
              show={showMemeGeneratorModal}
              close={() => setShowMemeGeneratorModal(false)}
            />
          )}
          {showTokenomicsModal && (
            <TokenomicsModal
              key="tokenomics"
              show={showTokenomicsModal}
              close={() => setShowTokenomicsModal(false)}
            />
          )}
          {showTrashModal && (
            <TrashModal
              key="trash"
              show={showTrashModal}
              close={() => setShowTrashModal(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </ViewContext.Provider>
  );
};
export default PageLayout;

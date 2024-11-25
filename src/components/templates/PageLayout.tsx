import { FC, ReactNode, useState } from "react";
import {
  PageHead,
  Header,
  Footer,
  SplashScreen,
  ContentModal,
} from "@components";
import { enterAnimation } from "@constants";
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
  const [showModal, setShowModal] = useState<boolean>(false);
  const value = {
    showView,
    setShowView,
    showModal,
    setShowModal,
  };

  return (
    <ViewContext.Provider value={value}>
      <div className="flex flex-col h-screen justify-between items-center overflow-none">
        <PageHead
          title="Paco"
          description="Description"
          url="https://addurl.xyz" // no backslash at the end
          twitter="twitterhandle"
        />
        <Header />

        {/* body */}
        <motion.main
          className="max-width flex flex-col h-full w-full overflow-x-hidden"
          {...enterAnimation}
        >
          {children}
        </motion.main>
        <Footer />

        {/* load screen */}
        {/* {assets && <SplashScreen assets={assets} />} */}

        {/* modals */}
        <AnimatePresence mode="wait">
          {showModal && (
            <ContentModal
              key="image-modal"
              show={showModal}
              close={() => setShowModal(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </ViewContext.Provider>
  );
};
export default PageLayout;

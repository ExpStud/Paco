import { createContext } from "react";

export const ViewContext = createContext({
  showView: false,
  setShowView: (value: boolean) => { },
  showReplyGuyModal: false,
  setShowReplyGuyModal: (value: boolean) => { },
  showMemeGeneratorModal: false,
  setShowMemeGeneratorModal: (value: boolean) => { },
  showTokenomicsModal: false,
  setShowTokenomicsModal: (value: boolean) => { },
  showTrashModal: false,
  setShowTrashModal: (value: boolean) => { },
});


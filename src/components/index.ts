import dynamic from "next/dynamic";

//icons
const ArrowIcon = dynamic(() => import("./@icons/ArrowIcon"));
const TwitterIcon = dynamic(() => import("./@icons/TwitterIcon")); 
const MenuIcon = dynamic(() => import("./@icons/MenuIcon"));
const CloseIcon = dynamic(() => import("./@icons/CloseIcon"));
const DownloadIcon = dynamic(() => import("./@icons/DownloadIcon"));
const TelegramIcon = dynamic(() => import("./@icons/TelegramIcon"));
const JupIcon = dynamic(() => import("./@icons/JupIcon"));
const DexscreenerIcon = dynamic(() => import("./@icons/DexscreenerIcon")); 
//atoms 
const Logo = dynamic(() => import("./atoms/Logo"));
const ModalScrollBar = dynamic(() => import("./atoms/ModalScrollBar"));
//molecules
const PageHead = dynamic(() => import("./molecules/PageHead")); 
const Modal = dynamic(() => import("./molecules/Modal")); 
const SplashScreen = dynamic(() => import("./molecules/SplashScreen")); 
const Clock = dynamic(() => import("./molecules/Clock")); 
const DesktopIcon = dynamic(() => import("./molecules/DesktopIcon")); 
//organisms
const Header = dynamic(() => import("./organisms/Header"));
const Footer = dynamic(() => import("./organisms/Footer"));
const ReplyGuyModal = dynamic(() => import("./organisms/ReplyGuyModal"));
const MemeGeneratorModal = dynamic(() => import("./organisms/MemeGeneratorModal"));
const TokenomicsModal = dynamic(() => import("./organisms/TokenomicsModal"));
const TrashModal = dynamic(() => import("./organisms/TrashModal"));
//templates
const PageLayout = dynamic(() => import("./templates/PageLayout"));
const LandingView = dynamic(() => import("./templates/LandingView"));
const AboutView = dynamic(() => import("./templates/AboutView"));

export {
  PageHead,
  Logo,
  Header,
  Footer,
  PageLayout,
  ArrowIcon, 
  TwitterIcon, 
  MenuIcon, 
  CloseIcon,
  Modal,
  DexscreenerIcon, 
  SplashScreen,
  LandingView,  
  AboutView,
  ReplyGuyModal,
  JupIcon,
  TelegramIcon,
  DownloadIcon,
  Clock,
  DesktopIcon,
  MemeGeneratorModal,
  TokenomicsModal,
  TrashModal,
  ModalScrollBar
}
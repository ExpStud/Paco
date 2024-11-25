import dynamic from "next/dynamic";

//icons
const ArrowIcon = dynamic(() => import("./@icons/ArrowIcon"));
const TwitterIcon = dynamic(() => import("./@icons/TwitterIcon"));
const DiscordIcon = dynamic(() => import("./@icons/DiscordIcon")); 
const MenuIcon = dynamic(() => import("./@icons/MenuIcon"));
const CloseIcon = dynamic(() => import("./@icons/CloseIcon"));
const DownloadIcon = dynamic(() => import("./@icons/DownloadIcon"));
//atoms 
const Logo = dynamic(() => import("./atoms/Logo"));
//molecules
const PageHead = dynamic(() => import("./molecules/PageHead")); 
const Modal = dynamic(() => import("./molecules/Modal")); 
const SplashScreen = dynamic(() => import("./molecules/SplashScreen"));
const HeaderContent = dynamic(() => import("./molecules/HeaderContent"));
//organisms
const Header = dynamic(() => import("./organisms/Header"));
const Footer = dynamic(() => import("./organisms/Footer"));
const ContentModal = dynamic(() => import("./organisms/ContentModal"));
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
  DiscordIcon, 
  MenuIcon, 
  CloseIcon,
  Modal,
  DownloadIcon, 
  SplashScreen,
  LandingView, 
  HeaderContent,
  AboutView,
  ContentModal
}
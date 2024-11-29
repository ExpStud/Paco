
export interface Assets {
  src: string;
  width?:number
  height?: string;
  alt?: string;
} 
export interface DownloadableAssets extends Assets { 
  downloadSrc: string;
}  

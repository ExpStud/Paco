
export interface Assets {
  src: string;
  width?:number
  height?: number;
  alt?: string;
} 
export interface DownloadableAssets extends Assets { 
  downloadSrc: string;
}  

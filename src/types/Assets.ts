
export interface Assets {
  src: string;
  width?:number
  height?: number;
  alt?: string;
} 
export interface DownloadableAsset extends Assets { 
  downloadSrc: string;
}  

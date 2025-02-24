import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import ImageKit from "imagekit";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




export const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});
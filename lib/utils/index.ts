import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import colors from '@/lib/data/sw-colors.json';
import schemes from '@/lib/data/hoa-schemes.json';

export function getHexFromSwColorId(id: string) {
    const color = colors.find(c => c.colorNumber === id);
    return color ? color.hex : '#000';
}

export function getSchemeFromId(id: string) {
    return schemes.find(s => s.id === id);
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

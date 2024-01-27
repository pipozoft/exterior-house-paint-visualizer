import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import swColors from '@/lib/data/sw-colors.json';
import bmColors from '@/lib/data/bm-colors.json';
import schemes from '@/lib/data/hoa-schemes.json';
import doorSchemes from '@/lib/data/door-schemes.json';
import { HoaScheme } from "../models";

const colors = [...swColors, ...bmColors];

export function getHexFromSwColorId(id: string) {
    const color = colors.find(c => c.colorNumber === id);
    return color ? color.hex : '#000';
}

export function getSwColorById(id: string) {
  return colors.find(c => c.colorNumber === id);
}

export function getSchemeFromId(id: string): HoaScheme | undefined {
    return schemes.find(s => s.id === id);
}

export function getDoorSchemeFromId(id: string) {
  return doorSchemes.find(s => s.id === id);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

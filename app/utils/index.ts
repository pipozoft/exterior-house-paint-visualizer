import colors from '@/app/data/sw-colors.json';
import schemes from '@/app/data/hoa-schemes.json';

export function getHexFromSwColorId(id: string) {
    const color = colors.find(c => c.colorNumber === id);
    return color ? color.hex : '#000';
}

export function getSchemeFromId(id: string) {
    return schemes.find(s => s.id === id);
}

export interface SwColor {
  colorNumber: string;
  coordinatingColors: SwCoordinatingColors;
  description: string[];
  id: string;
  isExterior: boolean;
  isInterior: boolean;
  name: string;
  lrv: number;
  brandedCollectionNames: string[];
  colorFamilyNames: string[];
  brandKey: string;
  red: number;
  green: number;
  blue: number;
  hue: number;
  saturation: number;
  lightness: number;
  hex: string;
  isDark: boolean;
  storeStripLocator: string;
  similarColors: string[];
  ignore: boolean;
  archived: boolean;
  lab: SwLab;
}

export interface SwCoordinatingColors {
  coord1ColorId: string;
  coord2ColorId: string;
  whiteColorId: string;
}

export interface SwLab {
  L: number;
  A: number;
  B: number;
}

// -----------
export interface DoorScheme {
  id: string;
  name: string;
  garage?: string | null
  frontDoor?: string | null
}

export interface HoaScheme extends DoorScheme {
  body: string
  fascia?: string | null
  accent?: string | null
  bands?: string | null
  trimOptions?: string[];
  isReversible?: boolean;
}

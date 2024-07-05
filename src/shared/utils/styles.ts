import { Palette } from '@mui/material';
import { RgbaObject } from 'hex-rgb';

export const color = (color: number | string, palette = 'primary') => (
  theme: any,
) => (theme.palette[palette as keyof Palette] as any)[color];

export const toRgba = (rgbaObject: RgbaObject) =>
  `rgba(${rgbaObject.red}, ${rgbaObject.green}, ${rgbaObject.blue}, ${rgbaObject.alpha})`;

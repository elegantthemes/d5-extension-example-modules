import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './warning-square.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/warning-square'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M44.8 895.289v-935.111h935.111v935.111h-935.111zM512.356 108.445c-37.333 0-67.556 30.222-67.556 67.556s30.222 67.556 67.556 67.556c37.333 0 67.556-30.222 67.556-67.556s-30.222-67.556-67.556-67.556zM569.244 361.6c0-36.267-21.689-65.422-48.711-65.422h-16.711c-26.667 0-48.711 29.156-48.711 65.422l-19.556 320c0 36.267 29.156 65.422 65.422 65.422h22.4c36.267 0 65.422-29.156 65.422-65.422l-19.556-320z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
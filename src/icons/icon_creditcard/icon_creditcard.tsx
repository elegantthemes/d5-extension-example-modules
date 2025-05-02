import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_creditcard.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_creditcard'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 832h-896c-35.328 0-64-28.672-64-64v-640c0-35.328 28.672-64 64-64h896c35.328 0 64 28.672 64 64v640c0 35.328-28.672 64-64 64zM960 128h-896v384h896v-384zM64 637.312v130.688h896v-130.688h-896zM160 192h320c17.664 0 32 14.336 32 32s-14.336 32-32 32h-320c-17.664 0-32-14.336-32-32s14.336-32 32-32zM576 224c0-17.673 14.327-32 32-32s32 14.327 32 32c0 17.673-14.327 32-32 32s-32-14.327-32-32zM704 224c0-17.673 14.327-32 32-32s32 14.327 32 32c0 17.673-14.327 32-32 32s-32-14.327-32-32zM832 224c0-17.673 14.327-32 32-32s32 14.327 32 32c0 17.673-14.327 32-32 32s-32-14.327-32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
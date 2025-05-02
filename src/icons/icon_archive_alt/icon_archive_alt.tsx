import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_archive_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_archive_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 896h-896c-35.328 0-64-28.672-64-64v-128h1024v128c0 35.328-28.672 64-64 64zM960 768h-896v64h896v-64zM64 64c0-35.328 28.672-64 64-64h768c35.328 0 64 28.672 64 64v576h-896v-576zM128 576h768v-512h-768v512zM672 512h-320c-17.664 0-32-14.336-32-32s14.336-32 32-32h320c17.664 0 32 14.336 32 32s-14.336 32-32 32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
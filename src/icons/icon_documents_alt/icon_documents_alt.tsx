import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_documents_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_documents_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M128 64h64v-64c0-35.328 28.672-64 64-64h640c35.328 0 64 28.672 64 64v768c0 35.328-28.672 64-64 64h-64v64c0 35.328-28.672 64-64 64h-640c-35.328 0-64-28.672-64-64v-768c0-35.328 28.672-64 64-64zM768 128h-640v768h640v-768zM896 768v-768h-640v64h512c35.328 0 64 28.672 64 64v640h64zM320 736c0-17.664 14.336-32 32-32h320c17.664 0 32 14.336 32 32s-14.336 32-32 32h-320c-17.664 0-32-14.336-32-32zM224 512h448c17.664 0 32 14.336 32 32s-14.336 32-32 32h-448c-17.664 0-32-14.336-32-32s14.336-32 32-32zM224 384h448c17.664 0 32 14.336 32 32s-14.336 32-32 32h-448c-17.664 0-32-14.336-32-32s14.336-32 32-32zM224 256h448c17.664 0 32 14.336 32 32s-14.336 32-32 32h-448c-17.664 0-32-14.336-32-32s14.336-32 32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
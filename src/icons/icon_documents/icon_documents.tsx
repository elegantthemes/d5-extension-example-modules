import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_documents.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_documents'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M128 64h64v-64c0-35.328 28.672-64 64-64h640c35.328 0 64 28.672 64 64v768c0 35.328-28.672 64-64 64h-64v64c0 35.328-28.672 64-64 64h-640c-35.328 0-64-28.672-64-64v-768c0-35.328 28.672-64 64-64zM896 768v-768h-640v64h512c35.328 0 64 28.672 64 64v640h64zM672 832c17.664 0 32-14.336 32-32s-14.336-32-32-32h-258.688c-17.664 0-32 14.336-32 32s14.336 32 32 32h258.688zM221.312 640h450.688c17.664 0 32-14.336 32-32s-14.336-32-32-32h-450.688c-17.664 0-32 14.336-32 32s14.336 32 32 32zM221.312 448h450.688c17.664 0 32-14.336 32-32s-14.336-32-32-32h-450.688c-17.664 0-32 14.336-32 32s14.336 32 32 32zM221.312 256h450.688c17.664 0 32-14.336 32-32s-14.336-32-32-32h-450.688c-17.664 0-32 14.336-32 32s14.336 32 32 32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
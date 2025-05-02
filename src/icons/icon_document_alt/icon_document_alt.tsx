import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_document_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_document_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M128-64h768c35.328 0 64 28.672 64 64v896c0 35.328-28.672 64-64 64h-768c-35.328 0-64-28.672-64-64v-896c0-35.328 28.672-64 64-64zM128 896h768v-896h-768v896zM736 768h-256c-17.664 0-32-14.336-32-32s14.336-32 32-32h256c17.664 0 32 14.336 32 32s-14.336 32-32 32zM736 576h-448c-17.664 0-32-14.336-32-32s14.336-32 32-32h448c17.664 0 32 14.336 32 32s-14.336 32-32 32zM736 384h-448c-17.664 0-32-14.336-32-32s14.336-32 32-32h448c17.664 0 32 14.336 32 32s-14.336 32-32 32zM736 192h-448c-17.664 0-32-14.336-32-32s14.336-32 32-32h448c17.664 0 32 14.336 32 32s-14.336 32-32 32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
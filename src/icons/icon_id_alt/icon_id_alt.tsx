import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_id_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_id_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 768h-896c-35.328 0-64-28.672-64-64v-576c0-35.328 28.672-64 64-64h896c35.328 0 64 28.672 64 64v576c0 35.328-28.672 64-64 64zM869.312 384h-389.312c-17.664 0-32 14.336-32 32s14.336 32 32 32h389.312c17.664 0 32-14.336 32-32s-14.336-32-32-32zM901.312 288c0-17.664-14.336-32-32-32h-389.312c-17.664 0-32 14.336-32 32s14.336 32 32 32h389.312c17.664 0 32-14.336 32-32zM869.312 512h-389.312c-17.664 0-32 14.336-32 32s14.336 32 32 32h389.312c17.664 0 32-14.336 32-32s-14.336-32-32-32zM257.536 454.464c69.824 0 126.464-75.904 126.464-169.6s-252.992-93.696-252.992 0 56.64 169.6 126.528 169.6zM178.624 562.688c0 42.688 34.56 77.312 77.248 77.312s77.312-34.624 77.312-77.312c0-42.688-34.624-77.312-77.312-77.312s-77.248 34.624-77.248 77.312z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
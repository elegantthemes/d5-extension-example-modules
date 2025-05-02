import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_drawer_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_drawer_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M809.984 896h-601.984c-35.328 0-64-24-80-64l-128-446.976v-353.024c0-17.664 14.336-32 32-32h960c17.664 0 32 14.336 32 32v349.056l-128 450.944c-17.984 40-50.624 64-86.016 64zM188.48 810.688c2.944 6.592 10.432 21.312 19.52 21.312h601.984c8.768 0 18.88-9.024 25.984-22.784l120.64-425.216h-284.608c-17.664 0-32-14.336-32-32v-96h-256v96c0 17.664-14.336 32-32 32h-285.696l122.176 426.688zM960 64h-896v256h256v-96c0-17.664 14.336-32 32-32h320c17.664 0 32 14.336 32 32v96h256v-256z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
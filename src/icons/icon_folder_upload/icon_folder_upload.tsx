import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_folder_upload.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_folder_upload'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 832h-320c-35.328 0-64-28.672-64-64 0 0-8.32-58.688-64-64h-448c-35.328 0-64-27.648-64-62.976v-577.024c0-35.328 28.672-64 64-64h384.192v320h-135.808l199.808 256 199.808-256h-135.808v-320h383.808c35.328 0 64 28.672 64 64v704c0 35.328-28.672 64-64 64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './divider.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/divider'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 576h-384v274.752l73.344-73.344c12.48-12.48 32.768-12.48 45.248 0s12.48 32.768 0 45.248l-128 128c-2.944 2.944-6.464 5.248-10.368 6.848-7.808 3.264-16.64 3.264-24.448 0-3.84-1.536-7.232-3.84-10.176-6.72-0.064-0.064-0.128-0.064-0.256-0.128l-128-128c-12.48-12.48-12.48-32.768 0-45.248s32.768-12.48 45.248 0l73.408 73.344v-274.752h-384c-35.328 0-64-28.672-64-64v-64c0-35.328 28.672-64 64-64h384v-338.752l-73.344 73.344c-12.48 12.48-32.768 12.48-45.248 0s-12.48-32.768 0-45.248l128-128c0.064-0.064 0.192-0.064 0.256-0.192 2.88-2.816 6.336-5.184 10.112-6.72 7.808-3.264 16.64-3.264 24.448 0 3.904 1.6 7.424 3.968 10.368 6.912l128 128c12.48 12.48 12.48 32.768 0 45.248s-32.768 12.48-45.248 0l-73.344-73.344v338.752h384c35.328 0 64 28.672 64 64v64c0 35.328-28.672 64-64 64zM960 448h-832v64h832v-64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
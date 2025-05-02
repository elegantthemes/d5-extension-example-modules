import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_adjust-vert.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_adjust-vert'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M320 704v96c0 17.664-14.336 32-32 32s-32-14.336-32-32v-96c-35.328 0-64-28.672-64-64v-64c0-35.328 28.672-64 64-64v-416c0-17.664 14.336-32 32-32s32 14.336 32 32v416c35.328 0 64 28.672 64 64v64c0 35.328-28.672 64-64 64zM256 640h64v-64h-64v64zM576 384v416c0 17.664-14.336 32-32 32s-32-14.336-32-32v-416c-35.328 0-64-28.672-64-64v-64c0-35.328 28.672-64 64-64v-96c0-17.664 14.336-32 32-32s32 14.336 32 32v96c35.328 0 64 28.672 64 64v64c0 35.328-28.672 64-64 64zM512 320h64v-64h-64v64zM832 576v224c0 17.664-14.336 32-32 32s-32-14.336-32-32v-224c-35.328 0-64-28.672-64-64v-64c0-35.328 28.672-64 64-64v-288c0-17.664 14.336-32 32-32s32 14.336 32 32v288c35.328 0 64 28.672 64 64v64c0 35.328-28.672 64-64 64zM768 512h64v-64h-64v64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
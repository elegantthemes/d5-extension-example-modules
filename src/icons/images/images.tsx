import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './images.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/images'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M931.996 747.996h-60v120c0 33.092-26.904 60-60 60h-719.992c-33.092 0-60-26.904-60-60v-659.992c0-33.092 26.904-60 60-60h60v-120c0-33.092 26.904-60 60-60h719.992c33.092 0 60 26.904 60 60v659.992c0 33.092-26.904 60-60 60zM92.004 208.004v659.992h719.992v-659.992h-719.992zM931.996 28.004h-719.992v120h60v-60h599.992v599.992h60v-659.992zM475.72 682.372c0-46.124 37.404-83.436 83.436-83.436s83.436 37.404 83.436 83.436-37.404 83.436-83.436 83.436-83.436-37.312-83.436-83.436v0zM332.004 627.996l-179.996-120v-239.996h599.992v299.996l-239.996-120-179.996 179.996z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
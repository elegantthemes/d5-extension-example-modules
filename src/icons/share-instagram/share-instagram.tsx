import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './share-instagram.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/share-instagram'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M636.8 426.667c0-68.925-55.875-124.8-124.8-124.8s-124.8 55.875-124.8 124.8c0 68.925 55.875 124.8 124.8 124.8s124.8-55.875 124.8-124.8zM697.6 874.667h-371.2c-147.2 0-262.4-115.2-262.4-262.4v-374.4c0-144 118.4-262.4 262.4-262.4h374.4c144 0 262.4 118.4 262.4 262.4v374.4c-3.2 147.2-118.4 262.4-265.6 262.4zM512 218.667c-115.2 0-208 92.8-208 208s92.8 208 208 208 208-92.8 208-208-92.8-208-208-208zM777.6 615.467c-28.8 0-54.4 25.6-54.4 54.4s25.6 54.4 54.4 54.4c28.8 0 54.4-25.6 54.4-54.4s-22.4-54.4-54.4-54.4z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
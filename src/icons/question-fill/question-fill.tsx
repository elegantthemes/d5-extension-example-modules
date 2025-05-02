import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './question-fill.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/question-fill'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512-47.996c273.914 0 495.996 222.082 495.996 495.996s-222.082 495.996-495.996 495.996-495.996-222.082-495.996-495.996 222.082-495.996 495.996-495.996zM512 819.998c123.442 0 247.998-70.68 247.998-228.654 0-91.946-45.57-163.74-135.408-213.154-26.040-14.322-50.592-42.656-50.592-54.188 0-34.224-27.776-62-62-62s-62 27.776-62 62c0 78.678 72.168 139.376 114.824 162.81 62.682 34.596 71.176 72.292 71.176 104.532 0 91.078-77.686 104.656-124 104.656-59.706 0-124-39.184-124-125.302 0-34.224-27.776-62-62-62s-62 27.776-62 62c0 161.942 127.782 249.3 247.998 249.3zM512 73.274c-35.278 0-63.86 28.582-63.86 63.86s28.582 63.86 63.86 63.86 63.86-28.582 63.86-63.86-28.582-63.86-63.86-63.86z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
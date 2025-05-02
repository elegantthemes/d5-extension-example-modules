import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './project.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/project'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M962.048 783.019h-212.992c-27.648 0-50.176-22.528-50.176-50.176v-75.776h-296.704v120.064c0 27.648-22.528 50.176-50.176 50.176h-275.456c-27.648 0-50.176-22.528-50.176-50.176v-275.712c0-27.648 22.528-50.176 50.176-50.176h105.984l128-204.032c-0.768-3.328-1.024-6.656-1.024-10.24v-212.992c0-27.648 22.528-50.176 50.176-50.176h212.992c27.648 0 50.176 22.528 50.176 50.176v212.992c0 27.648-22.528 50.176-50.176 50.176h-212.992c-2.816 0-5.376-0.256-7.936-0.768l-103.424 164.864h103.936c27.648 0 50.176 22.528 50.176 50.176v99.84h296.448v-81.408c0-27.648 22.528-50.176 50.176-50.176h212.992c27.648 0 50.176 22.528 50.176 50.176v212.992c-0.256 27.648-22.784 50.176-50.176 50.176z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
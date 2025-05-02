import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './shield.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/shield'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M850.606 556.352c0 0-23.702-287.812-152.374-440.186-10.158-10.158-20.316-20.316-30.474-30.474l-20.316-20.316-132.058-108.352-132.058 108.352-20.316 16.93c-13.544 13.544-27.088 27.088-40.632 44.018-121.9 155.76-148.986 426.642-148.986 426.642v57.562l345.378-88.036 335.22 88.036c-3.386 3.386-3.386-54.176-3.386-54.176zM850.606 729.040l-335.22-81.264-345.378 81.264v101.58l345.378-77.878 335.22 77.878z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './cloud-upload.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/cloud-upload'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M867.962 629.688c-7.414 0-14.834 0-18.538 0-25.958 96.406-114.944 170.564-222.474 170.564-74.158 0-140.902-37.082-181.688-88.992-18.538 7.414-37.082 7.414-55.62 7.414-77.868 0-148.316-48.206-174.274-114.944-18.538 7.414-33.372 11.124-55.62 11.124-77.868 0-137.192-63.034-137.192-137.192s55.62-129.778 126.068-137.192c0 0 3.71 0 3.71 0h266.97l-66.744-241.018h407.872l-66.744 237.308h166.86c0 0 3.71 0 3.71 0 3.71 0 3.71 0 7.414 0 81.572 0 148.316 66.744 148.316 148.316-3.71 81.572-70.448 144.612-152.026 144.612zM741.894 444.29h-122.364l29.662-107.53 51.91-196.522h-296.632l55.62 196.522 29.662 107.53h-122.364c-7.414 0-11.124 3.71-11.124 7.414 0 0 0 3.71 3.71 3.71l185.398 174.274c0 0 3.71 3.71 7.414 3.71s7.414 0 7.414-3.71l185.398-174.274c0 0 3.71-3.71 3.71-3.71 0-3.71-3.71-7.414-7.414-7.414z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
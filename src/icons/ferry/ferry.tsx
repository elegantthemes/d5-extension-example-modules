import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './ferry.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/ferry'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M15.2 247.667v-11c0-2.8 2.2-5 5-5v0c0.4 0 0.6 0 1 0 13.6-2.8 3-40.8 37.8-77.2h867.2c35.2 36.8 69.8 75.2 83 77.2h5.6v21h-994.4c-3 0-5.2-2.2-5.2-5zM717.4 321.067v-53h74.2v142.2c0 26.6 19.4 49.4 46 57.4h88.8v72.4h-911.2v-72.4h42.2c26.6-8 46-30.6 46-57.4v-142.2h404.8v53h209.2zM690.6 455.667h60.4v-16h-60.4v16zM690.6 416.867h60.4v-54.6h-60.4v54.6zM599.4 455.667h60.4v-16h-60.4v16zM599.4 416.867h60.4v-54.6h-60.4v54.6zM508.4 455.667h60.4v-16h-60.4v16zM508.4 416.867h60.4v-54.6h-60.4v54.6zM204.4 362.267h-60.2v54.6h60.4v-54.6zM204.4 439.667h-60.2v16h60.4v-16zM295.4 362.267h-60.4v54.6h60.4v-54.6zM295.4 439.667h-60.4v16h60.4v-16zM386.6 362.267h-60.4v54.6h60.4v-54.6zM386.6 439.667h-60.4v16h60.4v-16zM477.6 362.267h-60.4v54.6h60.4v-54.6zM477.6 439.667h-60.4v16h60.4v-16zM173.2 724.267v-75.2h-47.2v-55h-83v-40.4h809v40.4h-104.6v153.8h-26.8v-153.8h-237.8l-55.4 55h-57v45l-197.2 30.2zM337 629.267v-19h-21v19h21zM295.2 629.267v-19h-21.2v19h21.2zM253.2 629.267v-19h-21v19h21zM211.2 629.267v-19h-21v19h21zM148.2 629.267h21v-19h-21v19zM379 610.267h-21v19h21v-19z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
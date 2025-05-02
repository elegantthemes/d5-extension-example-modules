import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './close-line.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/close-line'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M544 896c-265.088 0-480-214.912-480-480s214.912-480 480-480 480 214.912 480 480-214.912 480-480 480zM544 0c-229.376 0-416 186.624-416 416s186.624 416 416 416 416-186.624 416-416-186.624-416-416-416zM721.152 638.4l-175.936-175.936-157.76 175.936c-12.48 12.48-32.768 12.48-45.248 0s-12.48-32.768 0-45.248l157.824-175.936-178.368-178.368c-12.48-12.48-12.48-32.768 0-45.248s32.768-12.48 45.248 0l175.936 175.936 157.824-175.936c12.48-12.48 32.768-12.48 45.248 0s12.48 32.768 0 45.248l-157.888 175.936 178.368 178.368c12.48 12.48 12.48 32.768 0 45.248s-32.768 12.48-45.248 0z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
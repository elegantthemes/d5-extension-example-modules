import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './triangle-line-right.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/triangle-line-right'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M544 896c-265.088 0-480-214.912-480-480s214.912-480 480-480 480 214.912 480 480-214.912 480-480 480zM544 0c-229.376 0-416 186.624-416 416s186.624 416 416 416 416-186.624 416-416-186.624-416-416-416zM756.288 436.928l-246.848 195.52c-13.888 10.88-36.416 10.88-50.304 0-0.128-0.128-0.192-0.256-0.32-0.32-6.656-5.056-10.816-12.096-10.816-19.968v-391.040c0-8 4.416-15.104 11.264-20.16l-0.128-0.128c13.888-10.88 36.416-10.88 50.304 0l248.128 195.968c13.888 10.88 13.888 28.608 0 39.488-0.384 0.32-0.896 0.384-1.28 0.64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
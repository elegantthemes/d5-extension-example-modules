import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './triangle-line-down.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/triangle-line-down'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M544 896c-265.088 0-480-214.912-480-480s214.912-480 480-480 480 214.912 480 480-214.912 480-480 480zM544 0c-229.376 0-416 186.624-416 416s186.624 416 416 416 416-186.624 416-416-186.624-416-416-416zM759.488 501.184c-5.056 6.656-12.096 10.816-19.968 10.816h-391.040c-8 0-15.104-4.416-20.16-11.264l-0.128 0.128c-10.88-13.888-10.88-36.416 0-50.304l195.968-248.128c10.88-13.888 28.608-13.888 39.488 0 0.32 0.384 0.384 0.896 0.704 1.28l195.52 246.848c10.88 13.888 10.88 36.416 0 50.304-0.128 0.128-0.256 0.192-0.384 0.32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
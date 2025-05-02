import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './skip-forward.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/skip-forward'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M545.586 121.306v0c-3.054-3.054-6.106-3.054-12.212-3.054-12.212 0-21.372 15.266-21.372 33.586v204.566l-274.788-235.098c-3.054-3.054-6.106-6.106-9.16-6.106-12.212 0-21.372 15.266-21.372 33.586v598.43c0 18.32 9.16 33.586 21.372 33.586 3.054 0 6.106-3.054 9.16-6.106v0l274.788-235.098v207.618c0 18.32 9.16 33.586 21.372 33.586 3.054 0 6.106-3.054 9.16-6.106v0l354.172-296.162c6.106-6.106 12.212-15.266 12.212-27.478s-6.106-21.372-12.212-27.478v0l-351.12-302.268z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
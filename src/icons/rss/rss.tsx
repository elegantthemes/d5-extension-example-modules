import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './rss.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/rss'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M380.498 210.564c0-58.506-47.428-105.934-105.934-105.934s-105.934 47.428-105.934 105.934c0 58.506 47.428 105.934 105.934 105.934s105.934-47.428 105.934-105.934zM530.262 104.636c0 200.906-160.726 361.632-357.976 361.632v149.764c281.266 0 507.746-230.13 507.746-511.396h-149.764zM782.31 104.636c0 339.714-273.96 617.33-610.024 617.33v157.070c420.074 0 763.444-347.020 763.444-770.748 0-3.65-153.42-3.65-153.42-3.65z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
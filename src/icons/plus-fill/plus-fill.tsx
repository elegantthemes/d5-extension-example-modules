import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './plus-fill.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/plus-fill'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M543.466 888.532c-260.668 0-471.998-211.33-471.998-471.998s211.33-471.998 471.998-471.998 471.998 211.328 471.998 471.998-211.328 471.998-471.998 471.998zM795.198 385.068h-220.266v-220.266c0-17.37-14.096-31.466-31.466-31.466s-31.466 14.096-31.466 31.466v220.266h-220.266c-17.37 0-31.466 14.096-31.466 31.466s14.096 31.466 31.466 31.466h220.266v220.266c0 17.37 14.096 31.466 31.466 31.466s31.466-14.096 31.466-31.466v-220.266h220.266c17.37 0 31.466-14.096 31.466-31.466s-14.096-31.466-31.466-31.466z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
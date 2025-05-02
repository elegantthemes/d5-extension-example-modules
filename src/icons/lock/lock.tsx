import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './lock.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/lock'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M809.322 600.286h-90.648v148.658c0 116.028-94.274 210.302-210.302 210.302s-210.302-94.274-210.302-210.302v-148.658h-83.394c-32.636 0-58.010-25.382-58.010-58.012v-478.61c0-32.636 25.382-58.010 58.010-58.010h598.266c32.636 0 58.010 25.382 58.010 58.010v0 474.99c0 32.636-29.010 61.638-61.638 61.638zM414.098 745.322c0 54.39 43.51 97.902 97.902 97.902s97.9-43.51 97.9-97.902v-152.284h-195.794v152.284zM410.478 107.168l54.392 188.542c-25.382 18.128-43.51 47.136-43.51 79.766 0 50.764 43.51 94.274 94.274 94.274 54.39 0 94.274-43.51 94.274-94.274 0-36.256-21.754-65.264-50.764-83.394l50.764-188.542h-199.422z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
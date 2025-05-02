import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './check-list.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/check-list'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M342.576 951.134h338.846v-112.948h-338.846v112.948zM881.662 827.914c0 30.794-25.68 56.474-56.474 56.474h-87.29v-56.474c0-30.794-25.68-56.474-56.474-56.474h-338.846c-30.794 0-56.474 25.68-56.474 56.474v56.474h-87.29c-30.794 0-56.474-25.68-56.474-56.474v-739.304c0-30.794 25.68-56.474 56.474-56.474h451.796v169.424c0 30.794 25.68 56.474 56.474 56.474h169.424v569.88zM424.71 273.44l-169.424 205.354 20.544 25.68 143.764-87.29 302.916 277.236 25.68-20.544-323.438-400.456zM722.49 186.15v-169.424l169.424 169.424z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow_up-down_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow_up-down_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M584.96-54.976c6.272-6.272 14.528-9.408 22.72-9.344 8.256 0 16.448 3.072 22.72 9.344l123.264 123.264c12.48 12.48 12.48 32.768 0 45.248s-32.768 12.48-45.248 0l-68.416-68.416v562.56c0 17.664-14.336 32-32 32s-32-14.336-32-32v-563.2l-73.728 73.728c-12.48 12.48-32.768 12.48-45.248 0s-12.48-32.768 0-45.248l127.936-127.936zM416 255.68c17.664 0 32 14.336 32 32v563.2l73.728-73.728c12.48-12.48 32.768-12.48 45.248 0s12.48 32.768 0 45.248l-127.936 127.936c-6.272 6.272-14.464 9.344-22.72 9.344s-16.448-3.072-22.72-9.344l-123.264-123.264c-12.48-12.48-12.48-32.768 0-45.248s32.768-12.48 45.248 0l68.416 68.416v-562.56c0-17.664 14.336-32 32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
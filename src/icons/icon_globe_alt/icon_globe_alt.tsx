import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_globe_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_globe_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M899.776 267.584c-174.272-174.208-457.856-174.336-632.128 0-84.352 84.288-130.752 196.544-130.752 316.096s46.464 231.808 130.688 316.032c12.48 12.48 12.48 32.768 0 45.248s-32.768 12.48-45.248 0c-96.384-96.32-149.44-224.64-149.44-361.28s53.12-265.024 149.44-361.344c81.344-81.408 183.616-128.96 289.664-143.872v-78.464h-96c-17.664 0-32-14.336-32-32s14.336-32 32-32h256c17.664 0 32 14.336 32 32s-14.336 32-32 32h-96v73.216c2.56-0.064 5.12-0.384 7.68-0.384 130.816 0 261.696 49.792 361.344 149.44 12.48 12.48 12.48 32.768 0 45.248s-32.768 12.544-45.248 0.064zM207.36 583.68c0-207.836 168.484-376.32 376.32-376.32s376.32 168.484 376.32 376.32c0 207.836-168.484 376.32-376.32 376.32s-376.32-168.484-376.32-376.32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
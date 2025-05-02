import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_youtube_circle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_youtube_circle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512c0 282.816-229.248 512-512 512zM826.56 333.376c-3.456-42.624-35.776-97.024-81.088-104.896-144.832-11.2-316.736-9.856-466.88 0-46.848 5.888-77.632 62.336-81.088 104.896-7.296 89.472-7.296 140.416 0 229.888 3.456 42.56 35.008 98.688 81.088 103.808 148.416 12.48 321.152 9.792 466.88 0 52.224-1.92 77.632-55.616 81.088-98.24 7.232-89.472 7.232-145.984 0-235.456zM448 320l192 128-192 128z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
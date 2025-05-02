import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_comment_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_comment_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M60.736 19.776c5.248-11.264 16.576-18.432 28.992-18.432 91.84 0 169.536 22.336 257.792 74.368 42.816-6.784 127.36-15.168 164.48-15.168 280.192 0 508.096 187.072 508.096 417.088s-227.904 417.024-508.096 417.024-508.096-187.008-508.096-417.024c0-108.416 52.288-213.184 144.32-290.816-20.864-47.36-48.704-92.032-83.008-132.928-7.936-9.6-9.728-22.912-4.48-34.112zM67.904 477.632c0 194.688 199.232 353.088 444.096 353.088s444.096-158.4 444.096-353.088-199.232-353.088-444.096-353.088c-36.736 0-132.352 9.856-164.672 16.128-7.808 1.408-15.936-0.064-22.72-4.096-59.648-36.48-111.68-57.344-167.36-66.176 24 36.352 43.968 74.752 59.52 114.752 5.184 13.376 0.96 28.48-10.496 37.12-89.28 67.584-138.368 158.336-138.368 255.36z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
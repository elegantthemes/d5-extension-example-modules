import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './pipe-angle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/pipe-angle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M388.267-46.933c-12.8 4.267-21.333 17.067-17.067 29.867l234.667 908.8c4.267 12.8 17.067 21.333 29.867 17.067s21.333-17.067 17.067-29.867l-234.667-908.8c-4.267-12.8-17.067-21.333-29.867-17.067z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
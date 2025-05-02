import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_link_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_link_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M305.856 830.208c37.44 37.44 98.304 37.44 135.744 0l343.232-343.232c16.896 63.936 1.088 134.72-49.024 184.832l-226.304 226.24c-75.008 75.008-196.544 75.008-271.552 0l-50.88-50.88c-75.008-75.008-75.008-196.544 0-271.552l226.304-226.304c50.112-50.112 120.896-65.92 184.832-49.024l-343.232 343.232c-37.44 37.44-37.44 98.304 0 135.744l50.88 50.944zM514.496-2.048c75.008-75.008 196.544-75.008 271.552 0l50.88 50.944c75.008 75.008 75.008 196.544 0 271.552l-226.304 226.176c-50.112 50.112-120.896 65.92-184.832 49.024l343.232-343.232c37.44-37.44 37.44-98.304 0-135.744l-50.944-50.944c-37.44-37.44-98.304-37.44-135.744 0l-343.168 343.296c-16.896-63.936-1.088-134.72 49.024-184.832l226.304-226.24z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
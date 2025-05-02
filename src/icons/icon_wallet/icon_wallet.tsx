import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_wallet.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_wallet'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 512v192c0 35.328-28.672 64-64 64h-19.072l-21.568 133.12c-1.344 8.384-5.952 15.872-12.864 20.8-6.784 4.992-15.36 7.104-23.808 5.632l-695.808-112.896c-17.472-2.816-29.312-19.264-26.432-36.736l1.6-9.92h-34.048c-35.328 0-64-28.672-64-64v-704c0-35.328 28.672-64 64-64h832c35.328 0 64 28.672 64 64v192c35.328 0 64 28.672 64 64v192c0 35.328-28.672 64-64 64zM64 704h832v-192h-256c-35.328 0-64-28.672-64-64v-192c0-35.328 28.672-64 64-64h256v-192h-832v704zM234.752 768l562.56 91.328 14.784-91.328h-577.344zM640 256v192h320v-192h-320zM704 352c0-17.673 14.327-32 32-32s32 14.327 32 32c0 17.673-14.327 32-32 32s-32-14.327-32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
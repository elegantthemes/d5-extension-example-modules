import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_gift_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_gift_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 704h-896c-35.328 0-64-28.672-64-64v-192h64v-448c0-35.328 28.672-64 64-64h768c35.328 0 64 28.672 64 64v448h64v192c0 35.328-28.672 64-64 64zM64 640h384v-128h-384v128zM128 0v448h320v-448h-320zM896 0h-318.656v448h318.656v-448zM960 512h-382.656v128h382.656v-128zM512 768c0 0.128-0.064 0.384-0.064 0.512h0.192c-0.064-0.128-0.128-0.384-0.128-0.512 0 0 167.616 0 256 0s128 43.008 128 96-39.616 96-128 96c-82.752 0-147.904-37.248-192-80.448-19.328 11.456-41.664 18.432-65.856 18.432-23.168 0-44.608-6.528-63.424-17.152-44.032 42.688-108.8 79.168-190.72 79.168-88.384 0-128-43.008-128-96s39.616-96 128-96c88.384 0 256 0 256 0zM832 864c0-26.432-34.816-32-64-32h-145.344c-0.512 0.896-0.96 1.856-1.472 2.688 32.512 31.616 81.792 61.312 146.816 61.312 29.184 0 64-5.568 64-32zM192 864c0 26.432 34.816 32 64 32 63.616 0 111.872-28.48 144.384-59.008-1.024-1.6-1.792-3.328-2.752-4.992h-141.632c-29.184 0-64 5.568-64 32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
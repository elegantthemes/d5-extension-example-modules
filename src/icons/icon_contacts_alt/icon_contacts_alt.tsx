import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_contacts_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_contacts_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M832 960h-768c-35.328 0-64-28.672-64-64v-896c0-35.328 28.672-64 64-64h768c35.328 0 64 28.672 64 64v896c0 35.328-28.672 64-64 64zM64 896h128v-896h-128v896zM832 0h-576v896h576v-896zM443.584 616.512c0 0 0 0 0 0 0-53.514 43.382-96.896 96.896-96.896s96.896 43.382 96.896 96.896c0 0 0 0 0 0s0 0 0 0c0 53.514-43.382 96.896-96.896 96.896s-96.896-43.382-96.896-96.896c0 0 0 0 0 0zM542.464 480.896c-87.488 0-158.464-95.168-158.464-212.544s316.992-117.376 316.992 0-70.976 212.544-158.528 212.544zM960 896h64v-192h-64zM960 640h64v-192h-64zM960 384h64v-192h-64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
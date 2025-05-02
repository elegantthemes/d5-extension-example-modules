import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './contacts.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/contacts'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M92.004 927.992c-33.12 0-60-26.88-60-60v-839.988c0-33.12 26.88-60 60-60h60v959.988h-60zM811.996 927.992h-599.992v-959.988h599.992c33.12 0 60 26.88 60 60v839.988c0 33.12-26.88 60-60 60zM538.7 696.756c50.16 0 90.78-40.68 90.78-90.78 0-50.16-40.68-90.84-90.78-90.84-50.16 0-90.84 40.68-90.84 90.84s40.68 90.78 90.84 90.78zM392 279.584c0 110.040 66.54 199.196 148.558 199.196s148.558-89.22 148.558-199.196-297.116-109.98-297.116 0zM931.996 867.996h60v-179.996h-60zM931.996 627.996h60v-179.996h-60zM931.996 388h60v-179.996h-60z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './people.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/people'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M449.926 789.408c0 83.024-72.162 155.186-155.186 155.186s-155.186-72.162-155.186-155.186 72.162-155.186 155.186-155.186 155.186 72.162 155.186 155.186zM558.556 199.704c0 248.296-128.9 372.444-271.574 372.444s-271.574-124.148-271.574-372.444c0-170.122 543.148-170.122 543.148 0zM744.778 513.468c83.024 0 155.186 72.162 155.186 155.186s-72.162 155.186-155.186 155.186-155.186-72.162-155.186-155.186 72.162-155.186 155.186-155.186zM737.018 451.394c-42.87 0-83.994-12.608-121.238-35.11 22.502-60.62 35.886-132.392 35.886-216.678 0-83.606-55.77-148.686-151.402-185.932 118.62-100.482 508.328-79.048 508.328 65.274 0 248.296-128.9 372.444-271.574 372.444v0z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
// WordPress dependencies.
import { __ } from '@wordpress/i18n';

import metadata from './module.json';

const customCssFields = metadata.customCssFields as Record<
  'inner' | 'title' | 'postTitle' | 'postItem' | 'postContent',
  { subName: string; selector?: string; selectorSuffix: string; label: string }
>;

customCssFields.inner.label       = __('Inner', 'd5-extension-example-modules');
customCssFields.title.label       = __('Title', 'd5-extension-example-modules');
customCssFields.postTitle.label   = __('Post Title', 'd5-extension-example-modules');
customCssFields.postItem.label    = __('Post Item', 'd5-extension-example-modules');
customCssFields.postContent.label = __('Post Content', 'd5-extension-example-modules');

export const cssFields = { ...customCssFields };

// WordPress dependencies.
import { __ } from '@wordpress/i18n';


export const cssFields = {
  contentContainer: {
    subName:        'contentContainer',
    label:          __('Content Container', 'd5-module-extension-example'),
    selectorSuffix: ' .static-module__content-container',
  },
  title: {
    subName:        'title',
    label:          __('Title', 'd5-module-extension-example'),
    selectorSuffix: ' .static-module__title',
  },
  content: {
    subName:        'content',
    label:          __('Content', 'd5-module-extension-example'),
    selectorSuffix: ' .static-module__content',
  },
  image: {
    subName:        'image',
    label:          __('Image', 'd5-module-extension-example'),
    selectorSuffix: ' .static-module__image img',
  },
};

// WordPress dependencies.
import { __ } from '@wordpress/i18n';


export const cssFields = {
  contentContainer: {
    subName:        'contentContainer',
    label:          __('Content Container', 'd5-module-extension-example'),
    selectorSuffix: ' .et_pb_child_module_content_container',
  },
  title: {
    subName:        'title',
    label:          __('Title', 'd5-module-extension-example'),
    selectorSuffix: ' .et_pb_child_module_title',
  },
  content: {
    subName:        'content',
    label:          __('Content', 'd5-module-extension-example'),
    selectorSuffix: ' .et_pb_child_module_content',
  },
  icon: {
    subName:        'icon',
    label:          __('Icon', 'd5-module-extension-example'),
    selectorSuffix: ' .et_pb_child_module_icon.et-pb-icon',
  },
};

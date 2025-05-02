/* eslint-disable @typescript-eslint/naming-convention */
import { convertFontIcon } from '@divi/conversion';

import { ModuleConversionOutline } from '@divi/types';

// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
// @see https://github.com/elegantthemes/d5-extension-example-modules/blob/main/src/components/d4-module/conversion-outline.ts
export const conversionOutline: ModuleConversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation:   'module.decoration.animation',
    background:  'module.decoration.background',
    borders:     {
      default: 'module.decoration.border',
    },
    box_shadow: {
      default: 'module.decoration.boxShadow',
    },
    disabled_on: 'module.decoration.disabledOn',
    filters:     {
      default: 'module.decoration.filters',
    },
    fonts: {
      body:       'content.decoration.bodyFont.body',
      body_link:  'content.decoration.bodyFont.link',
      body_ol:    'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul:    'content.decoration.bodyFont.ul',
      header:     'title.decoration.font',
    },
    height:          'module.decoration.sizing',
    link_options:    'module.advanced.link',
    margin_padding:  'module.decoration.spacing',
    max_width:       'module.decoration.sizing',
    module:          'module.advanced.htmlAttributes',
    overflow:        'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll:          'module.decoration.scroll',
    sticky:          'module.decoration.sticky',
    text:            'module.advanced.text',
    text_shadow:     {
      default: 'module.advanced.text.textShadow',
    },
    transform:  'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index:    'module.decoration.zIndex',
  },
  css: {
    after:         'css.*.after',
    before:        'css.*.before',
    main_element:  'css.*.mainElement',
    content:       'css.*.content',
    title:         'css.*.title',
  },
  module: {
    panel_layout: 'module.advanced.layout.*.style',
    content:      'content.innerContent.*',
    title:        'title.innerContent.*',
    heading_size: 'title.decoration.font.font.*.headingLevel',
    heading_text_color: 'title.decoration.font.font.*.color',
    heading_align: 'title.decoration.font.font.*.textAlign',
    show_button: 'title.readMore.button.*.enable',
    button_link: 'title.readMore.link.*.url',
    button_target: 'title.readMore.link.*.target',
    button_text: 'title.readMore.link.*.text',
    use_icon: 'title.readMore.icon.*.show',
    font_icon: 'title.readMore.icon.*.unicode',
  },
  valueExpansionFunctionMap: {
    font_icon: convertFontIcon,
  }
};

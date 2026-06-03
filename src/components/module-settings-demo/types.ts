// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';
import {
  FormatBreakpointStateAttr,
  InternalAttrs,
  type Element,
  type Module,
} from '@divi/types';

export interface ModuleSettingsDemoCssAttr extends Module.Css.AttributeValue {
  textInput?: string;
  richText?: string;
  selectField?: string;
  checkboxesField?: string;
}

export type ModuleSettingsDemoCssGroupAttr = FormatBreakpointStateAttr<ModuleSettingsDemoCssAttr>;

/**
 * Valid keys for {@link SELECT_OPTIONS}.
 */
export type SelectOptionKey = 'option_a' | 'option_b' | 'option_c';

/**
 * Valid keys for {@link CHECKBOX_OPTIONS}.
 */
export type CheckboxOptionKey = 'option_1' | 'option_2' | 'option_3' | 'option_4';

export interface ModuleSettingsDemoAttrs extends InternalAttrs {
  css?: ModuleSettingsDemoCssGroupAttr;

  module?: {
    meta?: Element.Meta.Attributes;
    advanced?: {
      link?: Element.Advanced.Link.Attributes;
      htmlAttributes?: Element.Advanced.IdClasses.Attributes;
      text?: Element.Advanced.Text.Attributes;
    };
    decoration?: Element.Decoration.PickedAttributes<
      'animation' |
      'background' |
      'border' |
      'boxShadow' |
      'disabledOn' |
      'filters' |
      'overflow' |
      'position' |
      'scroll' |
      'sizing' |
      'spacing' |
      'sticky' |
      'transform' |
      'transition' |
      'zIndex'
    >;
  };

  textInput?: {
    innerContent?: Element.Types.Text.InnerContent.Attributes;
  };

  richText?: Element.Types.Content.Attributes;

  selectField?: {
    innerContent?: Element.Types.Text.InnerContent.Attributes;
  };

  checkboxesField?: {
    innerContent?: FormatBreakpointStateAttr<string[]>;
  };
}

export type ModuleSettingsDemoEditProps = ModuleEditProps<ModuleSettingsDemoAttrs>;

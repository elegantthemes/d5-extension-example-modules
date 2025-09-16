import { ModuleEditProps } from '@divi/module-library';
import {
  FormatBreakpointStateAttr,
  InternalAttrs,
  type Element,
  type Icon,
  type Module,
} from '@divi/types';

export interface ParentModuleCssAttr extends Module.Css.AttributeValue {
  contentContainer?: string;
  title?: string;
  content?: string;
  icon?: string;
}

export type ParentModuleCssGroupAttr = FormatBreakpointStateAttr<ParentModuleCssAttr>;

export interface ParentModuleAttrs extends InternalAttrs {

  // CSS options is used across multiple elements inside the module thus it deserves its own top property.
  css?: ParentModuleCssGroupAttr;

  // Module
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

  // Title
  title?: Element.Types.Title.Attributes;

  // Content
  content?: Element.Types.Content.Attributes;

  // Icon
  icon?: {
    innerContent?: FormatBreakpointStateAttr<Icon.Font.AttributeValue>;
    advanced?: {
      color?: FormatBreakpointStateAttr<string>;
      size?: FormatBreakpointStateAttr<string>;
    };
  };
}

export type ParentModuleEditProps = ModuleEditProps<ParentModuleAttrs>;

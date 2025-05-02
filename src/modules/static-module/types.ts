// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';
import {
  FormatBreakpointStateAttr,
  InternalAttrs,
  type Element,
  type Module,
} from '@divi/types';

export interface Image {
  src?: string;
  alt?: string;
}

export interface StaticModuleCssAttr extends Module.Css.AttributeValue {
  contentContainer?: string;
  title?: string;
  content?: string;
  image?: string;
}

export type StaticModuleCssGroupAttr = FormatBreakpointStateAttr<StaticModuleCssAttr>;

export interface StaticModuleAttrs extends InternalAttrs {
  // CSS options is used across multiple elements inside the module thus it deserves its own top property.
  css?: StaticModuleCssGroupAttr;

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

  image?: {
    innerContent?: Element.Types.Image.InnerContent.Attributes;
    decoration?: Element.Decoration.PickedAttributes<
    'border' |
    'boxShadow' |
    'filters' |
    'spacing'
    >;
  };

  // Title
  title?: Element.Types.Title.Attributes;

  // Content
  content?: Element.Types.Content.Attributes;
}

export type StaticModuleEditProps = ModuleEditProps<StaticModuleAttrs>;

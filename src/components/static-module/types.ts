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
  summary?: string;
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
    > & {
      // Custom Attributes are stored at module.decoration.attributes
      // Using intersection type because @divi/types may not include 'attributes' in PickedAttributes yet
      // TODO: The Divi types library may need to be updated to properly export Element.Decoration.Attributes.Attributes
      // For now using 'any' - the actual structure matches FormatBreakpointStateAttr<{ attributes: AttributeItem[] }>
      attributes?: any;
    };
  };

  image?: {
    innerContent?: Element.Types.Image.InnerContent.Attributes;
    decoration?: Element.Decoration.PickedAttributes<
    'border' |
    'boxShadow' |
    'filters' |
    'spacing'
    > & {
      // Custom Attributes are stored at image.decoration.attributes
      // Using intersection type because @divi/types may not include 'attributes' in PickedAttributes yet
      // TODO: The Divi types library may need to be updated to properly export Element.Decoration.Attributes.Attributes
      // For now using 'any' - the actual structure matches FormatBreakpointStateAttr<{ attributes: AttributeItem[] }>
      attributes?: any;
    };
  };

  // Title
  title?: Element.Types.Title.Attributes;

  // Summary
  summary?: Element.Types.Title.Attributes;

  // Content
  content?: Element.Types.Content.Attributes;
}

export type StaticModuleEditProps = ModuleEditProps<StaticModuleAttrs>;

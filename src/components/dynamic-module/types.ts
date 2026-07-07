// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';
import {
  FormatBreakpointStateAttr,
  InternalAttrs,
  type Element,
  type Module,
} from '@divi/types';

export interface DynamicModuleCssAttr extends Module.Css.AttributeValue {
  inner?: string;
  title?: string;
  postTitle?: string;
  postItem?: string;
  postContent?: string;
}

export type DynamicModuleCssGroupAttr = FormatBreakpointStateAttr<DynamicModuleCssAttr>;

export interface DynamicModuleAttrs extends InternalAttrs {
  css?: DynamicModuleCssGroupAttr;
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
  postItems?: {
    innerContent?: FormatBreakpointStateAttr<{
      postsNumber?:string;
    }>;
  };
  postTitle?: {
    decoration?: Element.Decoration.PickedAttributes<'font'>;
  };
}

export type DynamicModuleEditProps = ModuleEditProps<DynamicModuleAttrs>;
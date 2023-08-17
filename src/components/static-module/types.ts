// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';
import {
  CssAttr,
  FormatBreakpointStateAttr,
  IdClassesGroupAttr,
  InternalAttrs,
  LinkGroupAttr,
  ModuleMetaAttrs,
  PickedElementAttrs,
  TextGroupAttr,
} from '@divi/types';

export interface Image {
  src?: string;
  alt?: string;
}

export interface StaticModuleCssAttr extends CssAttr {
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
    meta?: ModuleMetaAttrs;
    advanced?: {
      link?: LinkGroupAttr;
      htmlAttributes?: IdClassesGroupAttr;
      text?: TextGroupAttr;
    };
    decoration?: PickedElementAttrs<
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
    innerContent?: FormatBreakpointStateAttr<{
      src?: string;
      alt?: string;
    }>;
    decoration?: PickedElementAttrs<
      'border' |
      'boxShadow' |
      'filters' |
      'spacing'
    >;
  };

  // Title
  title?: {
    innerContent?: FormatBreakpointStateAttr<string>;
    decoration?: PickedElementAttrs<'font'>;
  };

  // Content
  content?: {
    innerContent?: FormatBreakpointStateAttr<string>;
    decoration?: PickedElementAttrs<'bodyFont'>;
  };
}

export type StaticModuleEditProps = ModuleEditProps<StaticModuleAttrs>;

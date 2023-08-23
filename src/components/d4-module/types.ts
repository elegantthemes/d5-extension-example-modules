// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';
import {
  CssAttr,
  FormatBreakpointStateAttr,
  IdClassesGroupAttr,
  InternalAttrs,
  LinkGroupAttr,
  TextGroupAttr,
  PickedElementDecorationAttrs,
  ModuleMetaAttrs,
  CssGroupAttr,
} from '@divi/types';

export interface D4ModuleCssAttr extends CssAttr {
  title?: string;
  content?: string;
}

export type D4ModuleCssGroupAttr = FormatBreakpointStateAttr<D4ModuleCssAttr>;

export interface D4ModuleAttrs extends InternalAttrs {
  // CSS options is used across multiple elements inside the module thus it deserves its own top property.
  css?: CssGroupAttr;

  module?: {
    meta?: ModuleMetaAttrs;
    advanced?: {
      link?: LinkGroupAttr;
      htmlAttributes?: IdClassesGroupAttr;
      text?: TextGroupAttr;
    };
    decoration?: PickedElementDecorationAttrs<
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
  title?: {
    innerContent?: FormatBreakpointStateAttr<string>;
    decoration?: PickedElementDecorationAttrs<'font'>;
  };
  content?: {
    innerContent?: FormatBreakpointStateAttr<string>;
    decoration?: PickedElementDecorationAttrs<'bodyFont'>;
  };
}

export type D4ModuleEditProps = ModuleEditProps<D4ModuleAttrs>;
import { ModuleEditProps } from '@divi/module-library';
import {
  CssAttr,
  FormatBreakpointStateAttr,
  IconFontAttr,
  IdClassesGroupAttr,
  InternalAttrs,
  LinkGroupAttr,
  ModuleMetaAttrs,
  PickedElementDecorationAttrs,
  TextGroupAttr,
} from '@divi/types';

export interface ParentModuleCssAttr extends CssAttr {
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

  // Title
  title?: {
    decoration?: PickedElementDecorationAttrs<'font'>;
  };

  // Content
  content?: {
    decoration?: PickedElementDecorationAttrs<'bodyFont'>;
  };

  // Icon
  icon?: {
    innerContent?: FormatBreakpointStateAttr<IconFontAttr>;
    advanced?: {
      color?: FormatBreakpointStateAttr<string>;
      size?: FormatBreakpointStateAttr<string>;
    };
  };
}

export type ParentModuleEditProps = ModuleEditProps<ParentModuleAttrs>;

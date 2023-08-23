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
import {
  ParentModuleAttrs,
} from "../parent-module/types";

export interface ChildModuleCssAttr extends CssAttr {
  contentContainer?: string;
  title?: string;
  content?: string;
  icon?: string;
}

export type ChildModuleCssGroupAttr = FormatBreakpointStateAttr<ChildModuleCssAttr>;

export interface ChildModuleAttrs extends InternalAttrs {
  // CSS options is used across multiple elements inside the module thus it deserves its own top property.
  css?: ChildModuleCssGroupAttr;

  // Module
  module?: {
    meta?: ModuleMetaAttrs;
    advanced?: {
      link?: LinkGroupAttr;
      htmlAttributes?: IdClassesGroupAttr;
      text?: TextGroupAttr;
    };
    decoration?: PickedElementDecorationAttrs<
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
    innerContent?: FormatBreakpointStateAttr<string>;
    decoration?: PickedElementDecorationAttrs<'font'>;
  };

  // Content
  content?: {
    innerContent?: FormatBreakpointStateAttr<string>;
    decoration?: PickedElementDecorationAttrs<'bodyFont'>;
  };

  // Icon
  // Icon
  icon?: {
    innerContent?: FormatBreakpointStateAttr<IconFontAttr>;
    advanced?: {
      color?: FormatBreakpointStateAttr<string>;
      size?: FormatBreakpointStateAttr<string>;
    };
  };
}

export type ChildModuleEditProps = ModuleEditProps<ChildModuleAttrs, ParentModuleAttrs>;

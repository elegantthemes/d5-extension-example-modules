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
    decoration?: PickedElementAttrs<
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
    decoration?: PickedElementAttrs<'font'>;
  };

  // Content
  content?: {
    innerContent?: FormatBreakpointStateAttr<string>;
    decoration?: PickedElementAttrs<'bodyFont'>;
  };

  // Icon
  icon?: {
    decoration?: PickedElementAttrs<'icon'>;
  }
}

export type ChildModuleEditProps = ModuleEditProps<ChildModuleAttrs, ParentModuleAttrs>;

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

  // Title
  title?: {
    decoration?: PickedElementAttrs<'font'>;
  };

  // Content
  content?: {
    decoration?: PickedElementAttrs<'bodyFont'>;
  };

  // Icon
  icon?: {
    decoration?: PickedElementAttrs<'icon'>;
  }
}

export type ParentModuleEditProps = ModuleEditProps<ParentModuleAttrs>;

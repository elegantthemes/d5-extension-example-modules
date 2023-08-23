// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';
import {
  FormatBreakpointStateAttr,
  IdClassesGroupAttr,
  InternalAttrs,
  LinkGroupAttr,
  TextGroupAttr,
  PickedElementDecorationAttrs,
  ModuleMetaAttrs,
} from '@divi/types';

export interface DynamicModuleAttrs extends InternalAttrs {
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
  postItems?: {
    innerContent?: FormatBreakpointStateAttr<{
      postsNumber?:string;
    }>;
  };
  postTitle?: {
    decoration?: PickedElementDecorationAttrs<'font'>;
  };
}

export type DynamicModuleEditProps = ModuleEditProps<DynamicModuleAttrs>;
// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';
import {
  FormatBreakpointStateAttr,
  IdClassesGroupAttr,
  InternalAttrs,
  LinkGroupAttr,
  TextGroupAttr,
  PickedElementAttrs,
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
  title?: {
    innerContent?: FormatBreakpointStateAttr<string>;
    decoration?: PickedElementAttrs<'font'>;
  };
  postItems?: {
    innerContent?: FormatBreakpointStateAttr<{
      postsNumber?:string;
    }>;
  };
  postTitle?: {
    decoration?: PickedElementAttrs<'font'>;
  };
}

export type DynamicModuleEditProps = ModuleEditProps<DynamicModuleAttrs>;
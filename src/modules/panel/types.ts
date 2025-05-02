/**
 *  The option attributes for decoration elements are fixed
 * @file node_modules/@divi/types/src/module/element/decoration/index.ts 
 * */

// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';

import {
  FormatBreakpointStateAttr,
  InternalAttrs,
  type Element,
  type Module,
  Icon
} from '@divi/types';

export interface ModuleCssAttr extends Module.Css.AttributeValue {
  title?: string;
  content?: string;
}

export type ModuleCssGroupAttr = FormatBreakpointStateAttr<ModuleCssAttr>;

export interface ModuleAttrs extends InternalAttrs {
  // CSS options is used across multiple elements inside the module thus it deserves its own top property.
  css?: ModuleCssGroupAttr;

  module?: {
    meta?: Element.Meta.Attributes;
    advanced?:{
      layout?: FormatBreakpointStateAttr<{style?: string}>;
      htmlAttributes?: Element.Advanced.IdClasses.Attributes;
    };
  }
  
  // Title
  title?: {
    innerContent?: Element.InnerContent.Attributes;
    decoration?: Element.Decoration.PickedAttributes<'font'>;
    readMore?: {
      link?: Element.Types.TitleLink.InnerContent.Attributes;
      icon?: Icon.Font.Attributes
    }
  }

  // Content
  content?: Element.Types.Content.Attributes;

}

export type EditProps = ModuleEditProps<ModuleAttrs>;
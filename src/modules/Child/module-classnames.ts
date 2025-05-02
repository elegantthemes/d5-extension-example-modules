import { ModuleClassnamesParams, textOptionsClassnames } from '@divi/module';
import { ChildModuleAttrs } from './types';


/**
 * Module classnames function for Divi 4 Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ChildModuleAttrs>} param0 Function parameters.
 */
export const moduleClassnames = ({
  classnamesInstance,
  attrs,
}: ModuleClassnamesParams<ChildModuleAttrs>): void => {
  // Text Options.
  classnamesInstance.add(textOptionsClassnames(attrs?.module?.advanced?.text ?? {}, {color: false}));
};

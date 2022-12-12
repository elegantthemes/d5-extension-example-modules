import { ModuleClassnamesParams, textOptionsClassnames } from '@divi/module';
import { DynamicModuleAttrs } from './types';


/**
 * Module classnames function for Static Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<DynamicModuleAttrs>} param0 Function parameters.
 */
export const moduleClassnames = ({
  classnamesInstance,
  attrs,
}: ModuleClassnamesParams<DynamicModuleAttrs>): void => {
  // Text Options.
  classnamesInstance.add(textOptionsClassnames(attrs?.text));
};

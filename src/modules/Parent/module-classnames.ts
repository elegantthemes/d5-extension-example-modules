import { ModuleClassnamesParams, textOptionsClassnames } from '@divi/module';
import { ParentModuleAttrs } from './types';


/**
 * Module classnames function for Parent Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ParentModuleAttrs>} param0 Function parameters.
 */
export const moduleClassnames = ({
  classnamesInstance,
  attrs,
}: ModuleClassnamesParams<ParentModuleAttrs>): void => {
  // Text Options.
  classnamesInstance.add(textOptionsClassnames(attrs?.module?.advanced?.text ?? {}));
};

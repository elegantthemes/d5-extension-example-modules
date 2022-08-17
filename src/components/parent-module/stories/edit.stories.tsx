import {
  createElement,
  ReactElement,
} from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { Story } from '@storybook/react';
import {
  defaultAttributes,
} from '../__mock-data__/attrs';

import { ParentModuleEdit } from '../edit';
import { ParentModuleEditProps } from '../types';
import { dispatch } from '@divi/data';
import { registerEditPostStore } from '@divi/edit-post';
import { parentModule } from '..';
import { childModule } from '../../child-module';
import { state } from '../__mock-data__/module-objects';

// Create template to render argument given.
const templateDividerEdit: Story<ParentModuleEditProps> = args => createElement(ParentModuleEdit, args);

const name = 'divi/parent-module';

// Stories.
const DefaultValues      = templateDividerEdit.bind({}) as Story<ParentModuleEditProps>;
DefaultValues.args       = {
  name,
  id:    'parent-module-1',
  attrs: defaultAttributes,
  childrenIds: [
    'childModule1',
    'childModule2',
    'childModule3',
  ],
};
DefaultValues.parameters = {
  docs: {
    description: {
      story: 'Default attributes that gets added when Child module is added.',
    },
  },
};


export {
};

export default {
  title: 'Modules/Parent Module/Edit',
  decorators: [
    ((story: () => ReactElement): ReactElement => {
      dispatch('divi/module-library').addModule(childModule);
      dispatch('divi/module-library').addModule(parentModule);
      registerEditPostStore(state);
      return story();
    }),
  ],
};

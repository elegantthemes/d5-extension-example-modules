import {
  createElement,
  ReactElement,
} from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { Story } from '@storybook/react';
import {
  defaultAttributes,
  customIcon,
  iconStyle,
  titleStyle,
  contentStyle,
} from '../__mock-data__/attrs';

import { ChildModuleEdit } from '../edit';
import { ChildModuleEditProps } from '../types';
import { dispatch } from '@divi/data';
import { childModule } from '..';

// Create template to render argument given.
const templateDividerEdit: Story<ChildModuleEditProps> = args => createElement(ChildModuleEdit, args);

const name = 'divi/child-module';

// Stories.
const DefaultValues      = templateDividerEdit.bind({}) as Story<ChildModuleEditProps>;
DefaultValues.args       = {
  name,
  id:    'child-module-1',
  attrs: defaultAttributes,
};
DefaultValues.parameters = {
  docs: {
    description: {
      story: 'Default attributes that gets added when Child module is added.',
    },
  },
};

const CustomIcon      = templateDividerEdit.bind({}) as Story<ChildModuleEditProps>;
CustomIcon.args       = {
  name,
  id:    'child-module-2',
  attrs: customIcon,
};
CustomIcon.parameters = {
  docs: {
    description: {
      story: 'Default attributes that gets added when Child module is added.',
    },
  },
};

const IconStyle      = templateDividerEdit.bind({}) as Story<ChildModuleEditProps>;
IconStyle.args       = {
  name,
  id:    'child-module-3',
  attrs: iconStyle,
};
IconStyle.parameters = {
  docs: {
    description: {
      story: 'Default attributes that gets added when Child module is added.',
    },
  },
};

const TitleStyle      = templateDividerEdit.bind({}) as Story<ChildModuleEditProps>;
TitleStyle.args       = {
  name,
  id:    'child-module-4',
  attrs: titleStyle,
};
TitleStyle.parameters = {
  docs: {
    description: {
      story: 'Default attributes that gets added when Child module is added.',
    },
  },
};

const ContentStyle      = templateDividerEdit.bind({}) as Story<ChildModuleEditProps>;
ContentStyle.args       = {
  name,
  id:    'child-module-5',
  attrs: contentStyle,
};
ContentStyle.parameters = {
  docs: {
    description: {
      story: 'Default attributes that gets added when Child module is added.',
    },
  },
};



export {
  DefaultValues,
  CustomIcon,
  IconStyle,
  TitleStyle,
  ContentStyle,
};

export default {
  title: 'Modules/Child Module/Edit',
  decorators: [
    ((story: () => ReactElement): ReactElement => {
      dispatch('divi/module-library').addModule(childModule);
      return story();
    }),
  ],
};

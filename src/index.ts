import { omit } from 'lodash';

import { addAction } from '@wordpress/hooks';

import { registerModule } from '@divi/module-library';

import { childModule } from './modules/child-module';
import { d4Module } from './modules/d4-module';
import { dynamicModule } from './modules/dynamic-module';
import { parentModule } from './modules/parent-module';
import { staticModule } from './modules/static-module';

import './icons';

// Register modules.
addAction('divi.moduleLibrary.registerModuleLibraryStore.after', 'extensionExample', () => {
  registerModule(staticModule.metadata, omit(staticModule, 'metadata'));
  registerModule(dynamicModule.metadata, omit(dynamicModule, 'metadata'));
  registerModule(childModule.metadata, omit(childModule, 'metadata'));
  registerModule(parentModule.metadata, omit(parentModule, 'metadata'));
  registerModule(d4Module.metadata, omit(d4Module, 'metadata'));
});

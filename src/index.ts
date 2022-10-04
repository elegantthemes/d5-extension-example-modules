import { omit } from 'lodash';
import { addFilter } from '@wordpress/hooks';
import { registerModule } from '@divi/module-library';
import { dynamicModule } from './components/dynamic-module';
import { staticModule } from './components/static-module';
import { childModule } from './components/child-module';
import { parentModule } from './components/parent-module';
import { d4Module } from './components/d4-module';

registerModule(staticModule.metadata, omit(staticModule, 'metadata'));
registerModule(dynamicModule.metadata, omit(dynamicModule, 'metadata'));
registerModule(childModule.metadata, omit(childModule, 'metadata'));
registerModule(parentModule.metadata, omit(parentModule, 'metadata'));
registerModule(d4Module.metadata, omit(d4Module, 'metadata'));

console.log('Hi');

addFilter('custom_modules_list', 'd5-module-extension-example', (modulesName) => ({
    ...modulesName,
    d4_module: 'divi/d4-module'
}));

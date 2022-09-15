import { omit } from 'lodash';
import { registerModule } from '@divi/module-library';
import { dynamicModule } from './components/dynamic-module';
import { staticModule } from './components/static-module';
import { childModule } from './components/child-module';
import { parentModule } from './components/parent-module';

registerModule(staticModule.metadata, omit(staticModule, 'metadata'));
registerModule(dynamicModule.metadata, omit(dynamicModule, 'metadata'));
registerModule(childModule.metadata, omit(childModule, 'metadata'));
registerModule(parentModule.metadata, omit(parentModule, 'metadata'));


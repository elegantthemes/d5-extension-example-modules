import { omit } from 'lodash';
import { registerModule } from '@divi/module-library';
// import { dynamicModule } from './components/dynamic-module';
import { staticModule } from './components/static-module';

registerModule(staticModule.metadata, omit(staticModule, 'metadata'));
// registerModule(dynamicModule.metadata, omit(dynamicModule, 'metadata'));

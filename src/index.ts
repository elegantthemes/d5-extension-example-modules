// Divi dependencies.
import { dispatch } from '@divi/data';

// Local dependencies.
import { staticModule } from './components/static-module';
import { childModule } from './components/child-module';
import { parentModule } from './components/parent-module';

// register static module.
dispatch('divi/module-library').addModule(staticModule);
dispatch('divi/module-library').addModule(parentModule);
dispatch('divi/module-library').addModule(childModule);

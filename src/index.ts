// Divi dependencies.
import { dispatch } from '@divi/data';

// Local dependencies.
import { staticModule } from './components/static-module';

// register static module.
dispatch('divi/module-library').addModule(staticModule);

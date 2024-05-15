import { 
  ModuleFlatObjectNamed, 
  ModuleFlatObjects,
  type EditPost
} from '@divi/types';

export type ModuleFlatObjectItems = (
  ModuleFlatObjectNamed<'example/child-module'> |
  ModuleFlatObjectNamed<'example/d4-module'> |
  ModuleFlatObjectNamed<'example/dynamic-module'> |
  ModuleFlatObjectNamed<'example/parent-module'> |
  ModuleFlatObjectNamed<'example/static-module'>
);

export type ExampleModuleFlatObjects = ModuleFlatObjects<ModuleFlatObjectItems>;

export type ExampleMutableEditPostStoreState = EditPost.Store.State<ExampleModuleFlatObjects>;

export type ExampleEditPostStoreState = EditPost.Store.ImmutableState<ExampleModuleFlatObjects>;
import { EditPostStoreState, MutableEditPostStoreState } from '@divi/edit-post';
import { ModuleFlatObjectNamed, ModuleFlatObjects } from '@divi/types';

export type ModuleFlatObjectItems = (
  ModuleFlatObjectNamed<'example/child-module'> |
  ModuleFlatObjectNamed<'example/d4-module'> |
  ModuleFlatObjectNamed<'example/dynamic-module'> |
  ModuleFlatObjectNamed<'example/parent-module'> |
  ModuleFlatObjectNamed<'example/static-module'>
);

export type ExampleModuleFlatObjects = ModuleFlatObjects<ModuleFlatObjectItems>;

export type ExampleMutableEditPostStoreState = MutableEditPostStoreState<ExampleModuleFlatObjects>;

export type ExampleEditPostStoreState = EditPostStoreState<ExampleMutableEditPostStoreState>;
import Immutable from 'seamless-immutable';

console.log(Immutable);


import {
  MutableEditPostStoreState,
  EditPostStoreState,
} from '@divi/edit-post';

import { defaultAttributes } from './attrs';
import {
  defaultAttributes as childDefaultAttributes,
} from '../../child-module/__mock-data__/attrs';

// Mutable state. NOTE: Update visualization if you change the mutable state structure.
/**
 * State visualization:
 *
 * **** root ****************************************************************************
 * *                                                                                    *
 * *    **** section1 **************************************************************    *
 * *    *                                                                          *    *
 * *    *    **** row1 ********************************************************    *    *
 * *    *    *                                                                *    *    *
 * *    *    *    ** column1 *********************************************    *    *    *
 * *    *    *    *                                                      *    *    *    *
 * *    *    *    *    ** parentModule1 **************************    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *    *           childModule1           *    *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *    *           childModule2           *    *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *    *           childModule3           *    *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    **********************************************    *    *    *    *
 * *    *    *    *                                                      *    *    *    *
 * *    *    *    ********************************************************    *    *    *
 * *    *    *                                                                *    *    *
 * *    *    ******************************************************************    *    *
 * *    *                                                                          *    *
 * *    ****************************************************************************    *
 * *                                                                                    *
 * **************************************************************************************.
 *
 */
export const mutableState: MutableEditPostStoreState = {
  content: {
    root: {
      id:       'root',
      name:     'divi/root',
      children: ['section1'],
      props:    {},
    },
    section1: {
      id:       'section1',
      name:     'divi/section',
      parent:   'root',
      children: ['row1'],
      props:    {},
    },
    row1: {
      id:       'row1',
      name:     'divi/row',
      parent:   'section1',
      children: ['column1'],
      props:    {
        attrs: {
          columnStructure: {
            desktop: {
              value: '4_4',
            },
          },
        },
      },
    },
    column1: {
      id:       'column1',
      name:     'divi/column',
      parent:   'row1',
      children: ['module1'],
      props:    {
        attrs: {
          type: {
            desktop: {
              value: '4_4',
            },
          },
        },
      },
    },
    parentModule1: {
      id:     'parentModule1',
      name:   'divi/slider',
      parent: 'column1',
      props:  {
        attrs: defaultAttributes,
      },
      children: [
        'childModule1',
        'childModule2',
        'childModule3',
      ],
    },
    childModule1: {
      id:     'childModule1',
      name:   'divi/slide',
      parent: 'parentModule1',
      props:  {
        attrs: childDefaultAttributes,
      },
      children: [],
    },
    childModule2: {
      id:     'childModule2',
      name:   'divi/slide',
      parent: 'parentModule1',
      props:  {
        attrs: childDefaultAttributes,
      },
      children: [],
    },
    childModule3: {
      id:     'childModule3',
      name:   'divi/slide',
      parent: 'parentModule1',
      props:  {
        attrs: childDefaultAttributes,
      },
      children: [],
    },
  },
};

export const state: EditPostStoreState = Immutable(mutableState);

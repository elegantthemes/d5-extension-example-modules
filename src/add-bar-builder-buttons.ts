import { MyModal } from './modals';
import {
  dispatch,
  useDispatch,
  useSelect,
} from '@divi/data';
setTimeout(() => {

  console.log(window.divi.appUi);
  window.divi.appUi.registerBuilderBarButton({
    active: false,
    iconSvg: { name: 'divi/add' },
    label: 'My Button',
    name: 'my-button',
    onClick: () => {
      console.log('My Button was clicked!');
    },
  });

  window.divi.appUi.registerBuilderBarButton({
    active: false,
    iconSvg: { name: 'divi/move' },
    label: 'My Second Button',
    name: 'my-second-button',
    onClick: () => {
      dispatch('divi/modal-library').open({
        name: 'example/my-modal',
      });
    },
  });
}, 1000);

window.vendor.wp.hooks.addFilter('divi.modalLibrary.modalMapping', 'divi', modals => {
  console.log('modals', modals);
  modals.myModal = {
    name: "example/my-modal",
    label: "My Modal",
    type: "multiInstanceModal",
    component: MyModal,
  };
  return modals;
});



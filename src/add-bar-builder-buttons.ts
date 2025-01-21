import { MyModal } from './modals';
import {
  dispatch,
  useDispatch,
  useSelect,
} from '@divi/data';
setTimeout(() => {

  window.divi.appUi.registerBuilderBarButton({
    active: false,
    iconSvg: { name: 'divi/add' },
    label: 'My Button',
    name: 'my-button',
    onClick: () => {
      dispatch('divi/modal-library').open({
        name: 'example/my-modal',
      });
  });

  window.divi.appUi.registerBuilderBarButton({
    active: false,
    iconSvg: { name: 'divi/move' },
    label: 'My Second Button',
    order: 20,
    name: 'my-second-button',
    onClick: () => {
      dispatch('divi/modal-library').open({
        name: 'example/my-modal',
      });
    },
  });
}, 1000);

window.vendor.wp.hooks.addFilter('divi.modalLibrary.modalMapping', 'divi', modals => {
  modals.myModal = {
    name: "example/my-modal",
    label: "My Modal",
    type: "multiInstanceModal",
    component: MyModal,
  };
  return modals;
});



//
// Why this is needed:
//
// > window.wp.compose.useIsomorphicLayoutEffect uses window.wp.element.useLayoutEffect instead of
// > window.wp.element.useEffect in JEST test environment because `window` value is not `undefined`
// > in D5i JEST test environment. In fact, D5i test needs and intentionally sets `window` value.
//
// How this override works:
//
// - `<RightClickOptions />` at `container.tsx` uses `withSelect()` (@wordpress/data)
// - `withSelect()` (@wordpress/data) uses `useSelect()` (@wordpress/data)
// - `useSelect()` (@wordpress/data) uses `useIsomorphicLayoutEffect()` (@wordpress/compose)
// - `useIsomorphicLayoutEffect()` (@wordpress/compose) uses `useLayoutEffect()` (@wordpress/element)
// and `useEffect()` (@wordpress/elementa)
// - both `useLayoutEffect()` and `useEffect()` of @wordpress/element is basically a wrapper of
// `window.React.useLayoutEffect()` and `window.React.useEffect()`.
//
// Considering that:
//
// - until `React.useLayoutEffect()` gets fixed by react team so it can be used on non browser environment,
// calling `useLayoutEffect()` on test environment will mean instant test failure
// - `withSelect()` is used on almost all D5i HOC.
//
// Hence this override. This override CAN BE REMOVED once `React.useLayoutEffect` can be used without
// generating warning in non browser environment.

window.React.useLayoutEffect = window.React.useEffect;

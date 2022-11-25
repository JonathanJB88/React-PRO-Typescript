import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const lazy1 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage1"*/ '../01-lazyload/pages/LazyPageOne'
    )
);
const lazy2 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage2"*/ '../01-lazyload/pages/LazyPageTwo'
    )
);
const lazy3 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage3"*/ '../01-lazyload/pages/LazyPageThree'
    )
);

export const routes: Route[] = [
  {
    path: '/lazy1',
    Component: lazy1,
    name: 'Lazy-1',
  },
  {
    path: '/lazy2',
    Component: lazy2,
    name: 'Lazy-2',
  },
  {
    path: '/lazy3',
    Component: lazy3,
    name: 'Lazy-3',
  },
];

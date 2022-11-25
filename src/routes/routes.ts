import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout"*/ '../01-lazyload/layout/LazyLayout'
    )
);

const NoLazy = lazy(
  () => import(/* webpackChunkName: "NoLazy"*/ '../01-lazyload/pages/NoLazy')
);

export const routes: Route[] = [
  {
    to: '/lazylayout/',
    path: '/lazylayout/*',
    Component: LazyLayout,
    name: 'LazyLayout',
  },
  {
    to: '/no-lazy',
    path: '/no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },
];

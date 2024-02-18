export interface IRouter {
  id: string;
  path?: string;
  element: React.JSX.Element;
  children?: {
    id: string;
    path: string;
    element: React.JSX.Element;
  }[];
}

export type TRouters = IRouter[];

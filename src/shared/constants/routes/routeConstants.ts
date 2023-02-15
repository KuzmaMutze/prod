export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PAGE_NOT_FOUND = 'pageNotFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PAGE_NOT_FOUND]: '/*',
};

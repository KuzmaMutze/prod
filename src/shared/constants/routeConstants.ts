export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  PAGE_NOT_FOUND = 'pageNotFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.PAGE_NOT_FOUND]: '/*',
};

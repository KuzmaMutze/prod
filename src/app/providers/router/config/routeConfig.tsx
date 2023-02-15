import { AboutPageLazy } from 'pages/AboutPage';
import { MainPageLazy } from 'pages/MainPage';
import { NotFoundPageLayz } from 'pages/NotFoundPage/ui/NotFoundPage.layz';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/constants/routes';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPageLazy />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPageLazy />,
  },
  [AppRoutes.PAGE_NOT_FOUND]: {
    path: RoutePath.pageNotFound,
    element: <NotFoundPageLayz />,
  },
};

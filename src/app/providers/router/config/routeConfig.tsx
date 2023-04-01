import { AboutPageLazy } from 'pages/AboutPage';
import { ArticlesPageLazy } from 'pages/ArticlesPage';
import { ArticleDetailsPageLazy } from 'pages/ArticleDetailsPage';
import { MainPageLazy } from 'pages/MainPage';
import { NotFoundPageLayz } from 'pages/NotFoundPage/ui/NotFoundPage.layz';
import { ProfilePageLazy } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/constants/routeConstants';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPageLazy />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPageLazy />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePageLazy />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPageLazy />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: RoutePath.article_details + ':id',
    element: <ArticleDetailsPageLazy />,
    authOnly: true,
  },
  [AppRoutes.PAGE_NOT_FOUND]: {
    path: RoutePath.pageNotFound,
    element: <NotFoundPageLayz />,
  },
};

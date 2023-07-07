import { Footer } from '../../components';
import Login from '../Pages/Login';
import DashboardHeader from '../features/Dashboard/components/DashboardHeader';

export const RouteData = [
  {
    id: 1,
    page: 'login',
    path: '/broker/login',
    element: <Login />,
  },
  {
    id: 2,
    page: 'dashboard',
    path: '/broker/home-dashboard',
    element: <DashboardHeader />,
    routes: [
      {
        id: 3,
        path: 'test',
        element: <Footer />,
      },
      {
        id: 4,
        path: 'test',
        element: <Footer />,
      },
    ],
  },
];

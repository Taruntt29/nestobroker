import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // import PersistGate
import { store, persistor } from './store/store'; // import store and persistor
import Login from './Pages/Login';
import DashboardPage from './Pages/dashboard/DashboardPage';
import Register from './Pages/Register';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PropertyDescription from './Pages/dashboard/property-details/PropertyDescription';
import ScrollToTop from './Common/scroll-to-top/ScrollToTop';
import ProfilePage from './dashboard-containers/broker-profile/Profile';
import ClientManagement from './features/Dashboard/components/client-cards/ClientManagement';
import { BrokerageManagement } from './features';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/broker/login" element={<Login />} />
              <Route path="/broker/register" element={<Register />} />
              <Route path="/broker/dashboard" element={<DashboardPage />} />
              <Route path="/broker/profile" element={<ProfilePage />} />
              <Route
                path="/broker/clientManagement"
                element={<ClientManagement />}
              />
              <Route
                path="/broker/property-details/:id"
                element={<PropertyDescription />}
              />
              <Route
                path="/broker/brokerageManagement"
                element={<BrokerageManagement />}
              />
            </Routes>
            {/* <Footer /> */}
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

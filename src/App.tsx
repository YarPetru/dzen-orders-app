import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import { MoonLoader } from 'react-spinners';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from 'components/layout';
import { HomePage, OrdersPage, ProductsPage } from './pages';

// const HomePage = lazy(() => import('./pages/HomePage'));
// const OrdersPage = lazy(() => import('./pages/OrdersPage'));
// const ProductsPage = lazy(() => import('./pages/ProductsPage'));

const App: React.FC = () => {
  return (
    <>
      {/* <Suspense
        fallback={
          <MoonLoader color="#2E7758" cssOverride={{ margin: '164px auto' }} size="100px" />
        }
      > */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      {/* </Suspense> */}
      <ToastContainer theme="light" position="top-center" autoClose={5000} />
    </>
  );
};

export default App;

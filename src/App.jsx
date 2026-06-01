import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import ErrorPage from "./components/ErrorPage";
import Loading from "./components/Loading";

// 🔥 LAZY LOAD PAGES
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customer"));
const Products = React.lazy(() => import("./pages/Products"));
const Components = React.lazy(() => import("./pages/Components"));

const Login = React.lazy(() => import("./pages/auth/login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));


// 🔥 ERROR PAGES
const Error400 = () => <ErrorPage code="400" description="Bad Request" />;
const Error401 = () => <ErrorPage code="401" description="Unauthorized" />;
const Error403 = () => <ErrorPage code="403" description="Forbidden" />;
const NotFound = () => <ErrorPage code="404" description="Page Not Found" />;


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* MAIN LAYOUT */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/components" element={<Components />} />
          <Route path="/products/:id" element={<ProductDetail />} /> 

          <Route path="/error-400" element={<Error400 />} />
          <Route path="/error-401" element={<Error401 />} />
          <Route path="/error-403" element={<Error403 />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        {/* AUTH LAYOUT */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

      </Routes>
    </Suspense>
  );
}

export default App;
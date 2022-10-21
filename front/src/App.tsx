import { lazy, Suspense, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const Mainpage = lazy(() => import("./pages/MainPage"));
const ShopsPage = lazy(() => import("./pages/ShopsPage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));

function App() {
  useEffect(() => {
    fetch("/api/posts", {
      method: "GET",
    }).then((res) => console.log(res));
  }, []);

  return (
    <Suspense fallback={<p>loading...</p>}>
      <Router>
        <Routes>
          <Route path="" element={<Mainpage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/payment/:productId" element={<PaymentPage />} />
          <Route path="/shops" element={<ShopsPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;

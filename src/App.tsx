import { Route, Routes } from "react-router-dom";
import "./App.css";

import { NotFoundComponent } from "./components/NotFoundComponent";
import { Layout } from "./layout/Layout";
import { AboutPage } from "./pages/AboutPage";
import { CustomerPage } from "./pages/CustomerPage";
import { MainPage } from "./pages/MainPage";
import { routes } from "./routes";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path={routes.customers.basePath} element={<MainPage />} />
        <Route path={routes.customers.customer} element={<CustomerPage />} />
        <Route path={routes.customers.about} element={<AboutPage />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </Layout>
  );
}

export default App;

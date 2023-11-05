import Layout from "./components/commons/Layout";
import TopPage from "./pages";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/products";
import AboutUsPage from "./pages/aboutus";
import MyProfilePage from "./pages/myprofile";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
      </Routes>
    </Layout>
  );
};

export default App;

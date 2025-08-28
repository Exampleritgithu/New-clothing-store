import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./containers/home";
import ProductDetail from "./containers/product-details";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slugId" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default App;

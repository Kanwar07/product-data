import ProductPage from "./components/productPage/ProductPage";
import Dashboard from "./components/dashboard/Dashboard";
import DetailsPage from "./components/detailsPage/DetailsPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Context from "./components/context/Context";

function App() {
  return (
    <>
      <Context>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Context>
    </>
  );
}

export default App;

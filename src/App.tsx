import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopAll from "./pages/ShopAll";
import items from "./assets/products.json";  // Import or fetch your item data

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clothes-store/" element={<HomePage />} />
        <Route path="/clothes-store/shop-all" element={<ShopAll items={items.items} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage"
import ShopAll from "./pages/ShopAll";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="shop-all" element={<ShopAll/>}></Route>
			</Routes>	
		</BrowserRouter>
	)
}

export default App

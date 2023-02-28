import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import News from "./pages/News";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="services" element={<Services />} />
					<Route path="news" element={<News />} />
					<Route path="blog" element={<Blog />} />
					<Route path="contact" element={<Contact />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogListPage from "./pages/BlogListPage";
import Home from "./pages/Home";
import BlogDetailPage from "./pages/BlogDetailPage";
import CreateBlogPage from "./pages/CreateBlogPage";
import Navbar from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto my-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogListPage />} />
          <Route path="/blogs/:id" element={<BlogDetailPage />} />
          <Route path="/create" element={<CreateBlogPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

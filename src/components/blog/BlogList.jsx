import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 6;
  const totalPages = 110;
  const visibleRange = 3;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `https://dev.to/api/articles?page=${page}&per_page=${perPage}`
        );
        const apiBlogs = res.data;
        const customBlogs =
          JSON.parse(localStorage.getItem("customBlogs")) || [];

        const combined =
          page === 1 ? [...customBlogs, ...apiBlogs] : [...apiBlogs];

        setBlogs(combined);
      } catch (err) {
        console.error("API Hatası:", err);
      }
    };

    fetchBlogs();
  }, [page]);

  const getPageNumbers = () => {
    let start = Math.max(1, page - visibleRange);
    let end = Math.min(totalPages, page + visibleRange);
    const numbers = [];

    if (page <= visibleRange + 1) {
      end = Math.min(totalPages, start + visibleRange * 2);
    }
    if (page + visibleRange >= totalPages) {
      start = Math.max(1, totalPages - visibleRange * 2);
    }
    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  // Arama filtreleme
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 px-4 mb-20">
      <aside className="space-y-6">
        {/* Arama */}
        <div className="bg-white shadow rounded-lg p-4">
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            🔍 Blog Ara
          </label>
          <input
            type="text"
            placeholder="Başlıkla ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Filtreler */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-semibold text-gray-700 mb-4">🗂️ Filtreler</h3>

          <div className="space-y-2 text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" disabled />
              React
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" disabled />
              JavaScript
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" disabled />
              Web Development
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" disabled />
              Next.js
            </label>
          </div>
        </div>
      </aside>

      {/* SAĞ TARAF: Bloglar */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded shadow p-4 flex flex-col min-h-[320px]"
            >
              <img
                src={blog.cover_image || "https://via.placeholder.com/400x200"}
                alt={blog.title}
                className="rounded mb-3 h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold">{blog.title}</h2>
              <p className="text-sm text-gray-600">
                {blog.description
                  ? blog.description.slice(0, 100) + "..."
                  : "Açıklama bulunamadı."}
              </p>
              <div className="text-sm text-gray-500 mt-2 mb-4">
                Yazar: {blog.user?.name || "Bilinmeyen"}
              </div>
              <div className="mt-auto">
                <Link
                  to={`/blogs/${blog.id}`}
                  className="text-primary hover:text-secondary font-semibold transition-colors duration-300"
                >
                  Devamını Oku
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sayfalama */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
          >
            ←
          </button>

          {getPageNumbers().map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`px-4 py-2 rounded border transition-colors duration-300 ${
                page === num
                  ? "text-primary font-bold border-primary"
                  : "text-gray-700 bg-white hover:bg-gray-100"
              }`}
            >
              {num}
            </button>
          ))}

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogList;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dev.to/api/articles/${id}`)
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Detay API hatası:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="text-center py-16 text-xl font-semibold text-gray-600">
        Yükleniyor...
      </div>
    );

  if (!blog)
    return (
      <div className="text-center py-16 text-red-500 text-lg font-medium">
        Blog bulunamadı.
      </div>
    );

  const publishedDate = new Date(blog.published_at).toLocaleDateString("tr-TR");

  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark text-textDark dark:text-textLight">
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex flex-col items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url(${
            blog.cover_image || "https://via.placeholder.com/1200x400"
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 px-4">
          {blog.tags?.[0] && (
            <span className="inline-block bg-gray-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {blog.tags[0]}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{blog.title}</h1>
          <div className="text-sm text-gray-200 flex flex-col md:flex-row items-center justify-center gap-2">
            <span>By {blog.user.name}</span>
            <span>📅 {publishedDate}</span>
            <span>
              ⏱️{" "}
              {blog.reading_time_minutes
                ? `${blog.reading_time_minutes} dk okuma`
                : "Okuma süresi yok"}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto grid md:grid-cols-[2fr_1fr] gap-8 px-4 py-10">
        <div>
          <article className="prose prose-img:rounded-lg prose-img:mx-auto prose-img:max-h-[500px] prose-img:object-contain prose-p:leading-7 dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: blog.body_html }} />
          </article>
        </div>

        <aside className="space-y-6">
          <div className="bg-white dark:bg-gray-800 shadow rounded p-6 text-center">
            <img
              src={
                blog.user.profile_image ||
                "https://via.placeholder.com/100x100?text=Yazar"
              }
              alt={blog.user.name}
              className="mx-auto w-24 h-24 rounded-full mb-3 object-cover border-4 border-primary"
            />
            <h3 className="text-lg font-semibold">{blog.user.name}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {blog.user.summary || "Yazar hakkında bilgi bulunamadı."}
            </p>
          </div>

          {blog.tags && blog.tags.length > 0 && (
            <div className="bg-white dark:bg-gray-800 shadow rounded p-6">
              <h4 className="font-semibold mb-3">Etiketler</h4>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 dark:bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default BlogDetailPage;

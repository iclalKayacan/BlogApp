import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RandomPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dev.to/api/articles?per_page=3&page=4") 
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("API Hatası:", err));
  }, []);

  if (posts.length === 0)
    return <div className="text-center py-10">Yükleniyor...</div>;

  return (
    <section className="py-6 bg-backgroundGray dark:bg-backgroundDark min-h-[600px]">
      <div className="container mx-auto px-8 md:px-12 max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        <div
          className="relative col-span-2 h-[475px] bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url(${
              posts[0].cover_image || "https://via.placeholder.com/800x400"
            })`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <span className="text-white border border-white px-2 py-1 rounded-full text-sm">
              {posts[0].tags?.[0] || "Genel"}
            </span>
            <Link to={`/blogs/${posts[0].id}`}>
              <h2 className="text-2xl font-bold mt-2">{posts[0].title}</h2>
            </Link>
            <p className="text-xs mt-1 max-w-sm text-gray-200">
              {posts[0].description
                ? posts[0].description.slice(0, 100) + "..."
                : "Açıklama yok."}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {posts.slice(1).map((post) => (
            <div
              key={post.id}
              className="relative h-[230px] bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${
                  post.cover_image || "https://via.placeholder.com/600x300"
                })`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <span className="text-white border border-white px-2 py-1 rounded-full text-sm">
                  {post.tags?.[0] || "Etiket"}
                </span>
                <Link to={`/blogs/${post.id}`}>
                  <h3 className="text-base font-semibold mt-1">{post.title}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomPosts;

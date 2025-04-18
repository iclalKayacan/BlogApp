import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dev.to/api/articles?per_page=7")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("API Hatası:", err));
  }, []);

  if (posts.length < 7)
    return <div className="text-center py-10">Yükleniyor...</div>;

  return (
    <section
      id="latest-posts"
      className="py-12 bg-backgroundLight dark:bg-backgroundDark"
    >
      <div className="container mx-auto px-8 md:px-12 max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-textDark dark:text-textLight">
            Son Yüklenen Bloglar
          </h2>

          <div
            className="bg-gray-800 text-white p-6 h-[300px] flex flex-col justify-end rounded-lg mb-6 bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${
                posts[0].cover_image || "https://via.placeholder.com/800x400"
              })`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            <div className="relative z-10">
              <span className="inline-block text-white px-2 py-1 rounded-full text-xs font-semibold border border-white">
                {posts[0].tags?.[0] || "Genel"}
              </span>
              <Link to={`/blogs/${posts[0].id}`}>
                <h3 className="text-2xl font-bold mt-3">{posts[0].title}</h3>
              </Link>
              <p className="text-gray-300 text-xs mt-2">
                {posts[0].user.name} •{" "}
                {new Date(posts[0].published_at).toLocaleDateString()} •{" "}
                {posts[0].reading_time_minutes} min read
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {posts.slice(1, 3).map((post) => (
              <div key={post.id} className="flex space-x-4 items-center">
                <div
                  className="w-1/4 h-[100px] bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage: `url(${
                      post.cover_image || "https://via.placeholder.com/600x300"
                    })`,
                  }}
                ></div>
                <div className="w-3/4">
                  <span className="text-xs text-gray-500">
                    {post.tags?.[0] || "Etiket"} • {post.reading_time_minutes}{" "}
                    min read
                  </span>
                  <Link to={`/blogs/${post.id}`}>
                    <h4 className="text-lg font-semibold mt-1 text-textDark dark:text-textLight">
                      {post.title}
                    </h4>
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">
                    {post.user.name} •{" "}
                    {new Date(post.published_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link to="/blogs">
              <button className="px-4 py-2 mt-4 bg-primary text-white text-sm font-semibold rounded-full hover:bg-secondary transition">
                Daha Fazlasını Gör
              </button>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-textDark dark:text-textLight">
            Popüler Bloglar
          </h3>
          <div className="space-y-4">
            {posts.slice(3, 7).map((post) => (
              <div key={post.id} className="flex space-x-4 items-center">
                <div
                  className="w-1/6 h-[50px] bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage: `url(${
                      post.cover_image || "https://via.placeholder.com/100x100"
                    })`,
                  }}
                ></div>
                <div>
                  <Link to={`/blogs/${post.id}`}>
                    <h5 className="text-sm font-semibold text-textDark dark:text-textLight">
                      {post.title}
                    </h5>
                  </Link>
                  <span className="text-xs text-gray-500">
                    {new Date(post.published_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gray-200 h-[250px] flex items-center justify-center rounded-lg">
            <span className="text-sm text-gray-500">Advertisement</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;

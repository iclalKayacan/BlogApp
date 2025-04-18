import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlogPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      description,
      cover_image: previewUrl,
      user: { name: "Ben" },
      source: "local",
    };

    const existingPosts = JSON.parse(localStorage.getItem("customBlogs")) || [];
    const updatedPosts = [newPost, ...existingPosts];
    localStorage.setItem("customBlogs", JSON.stringify(updatedPosts));
    navigate("/blogs");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 mb-20 px-6 py-10 bg-white dark:bg-gray-900 shadow-xl rounded-xl">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-10">
        Blog Oluştur
      </h1>

      {error && (
        <div className="bg-red-100 border border-red-300 text-red-700 p-4 rounded mb-6 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {previewUrl && (
          <div className="w-full h-60 rounded-lg overflow-hidden shadow">
            <img
              src={previewUrl}
              alt="Önizleme"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div>
          <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
            Başlık{" "}
            <span className="text-sm text-gray-400">({title.length}/100)</span>
          </label>
          <input
            type="text"
            maxLength={100}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Örneğin: React ile Blog Uygulaması Geliştirme"
            className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
            İçerik
          </label>
          <textarea
            rows={8}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Yazınızı buraya yazın..."
            className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
            Kapak Görseli
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-primary file:text-white
            hover:file:bg-secondary cursor-pointer"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-primary hover:bg-secondary text-white font-semibold px-6 py-3 rounded-full text-lg transition"
          >
            Blogu Yayınla 
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogPage;

import React from "react";
import BlogList from "../components/blog/BlogList";

const BlogListPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-6 ml-5">Tüm Bloglar</h1>
      <BlogList />
    </div>
  );
};

export default BlogListPage;

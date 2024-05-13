"use client";

import Navbar from "../Components/Navbar";
import BlogsHero from "./Components/BlogsHero";
import BlogsList from "./Components/BlogsList";
import data from "./Blogs.json";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    console.log(data);
    setBlogs(data);
  });

  return (
    <>
      <div className="Blogs">
        <Navbar />
        <BlogsHero />
        {blogs && <BlogsList blogs={blogs} />}
      </div>
    </>
  );
};

export default Blogs;

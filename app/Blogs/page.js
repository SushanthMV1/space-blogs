"use client";

import Navbar from "../Components/Navbar";
import BlogsHero from "./Components/BlogsHero";
import BlogsList from "./Components/BlogsList";
import data from "./Blogs.json";
import { useEffect, useState } from "react";
import "./Stylesheets/globals.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);
  const [input, setInput] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(null); // New state for filtered blogs

  useEffect(() => {
    setBlogs(data);
  }, []);

  const handleFilter = () => {
    if (input) {
      const filtered = blogs.filter((blog) => blog.title.includes(input));
      setFilteredBlogs(filtered);
    } else {
      // Reset filtered blogs if input is empty
      setFilteredBlogs(null);
    }
  };

  return (
    <>
      <div className="Blogs">
        <Navbar />
        <BlogsHero />

        {/* Searchbar Section */}
        <div className="blogSearch">
          <input
            type="text"
            id="input"
            placeholder="Type here..."
            onChange={(e) => setInput(e.target.value)}
            className="input"
          />
          <button id="submit" onClick={handleFilter} className="submit">
            &#128269;
          </button>
        </div>

        {blogs && (
          <BlogsList blogs={filteredBlogs !== null ? filteredBlogs : blogs} />
        )}
      </div>
    </>
  );
};

export default Blogs;

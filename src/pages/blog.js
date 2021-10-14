import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogPostSummary from "../components/blog-post-summary";

const Blog = () => {
  //get blogposts

  //ten at a time

  //
  const [shownBlogPosts, setShownBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);
  const postsPerPage = 5;

  const retrievePosts = () => {
    axios
      .get(
        `https://api.github.com/users/danny-carmen/gists?per_page=${postsPerPage}&page=${currentPage}`
      )
      .then((res) => {
        setShownBlogPosts(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://api.github.com/users/danny-carmen/gists")
      .then((res) => {
        setTotalPosts(res.data.length);
      })
      .catch((err) => console.log(err));
    retrievePosts();
  }, []);

  const handlePostOpenClick = (postUrl) => {
    setSelectedPost(postUrl);
  };

  const handlePostCloseClick = (postUrl) => {
    setSelectedPost(null);
  };
  const blogPosts = shownBlogPosts.map((blogPost, idx) => {
    return (
      <BlogPostSummary
        key={idx}
        title={blogPost.description}
        visible={true}
        postUrl={blogPost.files["gistfile1.txt"].raw_url}
        handlePostOpen={handlePostOpenClick}
        handlePostClose={handlePostCloseClick}
      />
    );
  });

  useEffect(() => {
    retrievePosts();
  }, [currentPage]);

  return (
    <div className="blog-page">
      <div className="blog-page--title">CAD to Code</div>
      <div className="blog-page--subtitle">
        My journey from architecture to software development
      </div>
      <div className="blog-posts-wrapper">{blogPosts}</div>
      <div className="blog-posts-buttons">
        <button
          className={
            Math.ceil(totalPosts / postsPerPage) <= currentPage
              ? "inactive"
              : null
          }
          onClick={() => {
            console.log(currentPage);
            if (currentPage < totalPosts / postsPerPage) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          Earlier Posts
        </button>
        <div className={totalPosts / postsPerPage <= 1 ? "inactive" : null}>
          Page {currentPage}
        </div>
        <button
          className={currentPage <= 1 ? "inactive" : null}
          onClick={() => {
            console.log(currentPage);
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          Later Posts
        </button>
      </div>
    </div>
  );
};

//posts, shortened to certain length
//button for earlier or later

export default Blog;

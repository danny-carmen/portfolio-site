import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogPostSummary from "../components/blog-post-summary";

const Blog = () => {
  const [shownBlogPosts, setShownBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);
  const [openedPost, setOpenedPost] = useState(null);
  const postsPerPage = 4;

  const retrievePosts = (pageNumber) => {
    axios
      .get(
        `https://api.github.com/users/danny-carmen/gists?per_page=${postsPerPage}&page=${pageNumber}`
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
    retrievePosts(currentPage);
  }, [currentPage]);

  const handlePostOpenClick = (postUrl) => {
    setSelectedPost(postUrl);

    setTimeout(() => {
      setOpenedPost(postUrl);
    }, 350);
  };

  const handlePostCloseClick = () => {
    setOpenedPost(null);
    setTimeout(() => {
      setSelectedPost(null);
    }, 350);
  };
  const blogPosts = shownBlogPosts.map((blogPost, idx) => {
    return (
      <BlogPostSummary
        key={idx}
        title={blogPost.description}
        visible={
          selectedPost === null ||
          selectedPost === blogPost.files["gistfile1.txt"].raw_url
            ? true
            : false
        }
        opened={openedPost !== null}
        postUrl={blogPost.files["gistfile1.txt"].raw_url}
        handlePostOpen={handlePostOpenClick}
        handlePostClose={handlePostCloseClick}
      />
    );
  });

  const changeBlogPage = (pageNumber) => {
    setCurrentPage(pageNumber);

    retrievePosts(pageNumber);
  };

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
            if (currentPage < totalPosts / postsPerPage) {
              changeBlogPage(currentPage + 1);
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
            if (currentPage > 1) {
              changeBlogPage(currentPage - 1);
            }
          }}
        >
          Later Posts
        </button>
      </div>
    </div>
  );
};

export default Blog;

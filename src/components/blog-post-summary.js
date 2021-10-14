import axios from "axios";
import React, { useEffect, useState } from "react";

const BlogPostSummary = (props) => {
  const [summarizedPost, setSummarizedPost] = useState("");

  axios
    .get(props.postUrl)
    .then((res) => {
      setSummarizedPost(res.data);
    })
    .catch((err) => console.log(err));

  return (
    <div
      className={
        props.visible ? "blog-post-summary " : "blog-post-summary hidden"
      }
    >
      <div className="blog-post--title">{props.title}</div>
      <div className="blog-post--content">{summarizedPost}</div>
      <div className="blog-post--read-more" onClick={props.handlePostOpen}>
        Read More...
      </div>
    </div>
  );
};

export default BlogPostSummary;

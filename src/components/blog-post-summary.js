import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from "react-markdown";

const BlogPostSummary = (props) => {
  const [summarizedPost, setSummarizedPost] = useState("");
  let className = "blog-post-summary";
  useEffect(() => {
    axios
      .get(props.postUrl)
      .then((res) => {
        setSummarizedPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [props.title]);

  if (props.visible && !props.opened) {
    className = "blog-post-summary";
  } else if (!props.visible && !props.opened) {
    className = "blog-post-summary blog-post-summary--hidden";
  } else if (!props.visible && props.opened) {
    className = "blog-post-summary blog-post-summary--closed";
  } else {
    className = "blog-post-summary blog-post-summary--opened";
  }

  if (
    (props.visible && !props.opened) ||
    (props.visible && props.opened) ||
    (!props.visible && !props.opened)
  ) {
    return (
      <div className={className}>
        <div className="blog-post--title">{props.title}</div>

        <button
          className="blog-post--close-button"
          onClick={() => {
            {
              props.opened
                ? props.handlePostClose()
                : props.handlePostOpen(props.postUrl);
            }
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <ReactMarkdown className="blog-post--contents">
          {summarizedPost}
        </ReactMarkdown>
        {/* {props.opened ? null : (
          <div
            className="blog-post--read-more"
            onClick={() => {
              props.handlePostOpen(props.postUrl);
            }}
          >
            Open Post...
          </div>
        )} */}
      </div>
    );
  } else {
    return <div className={className}></div>;
  }
};

export default BlogPostSummary;

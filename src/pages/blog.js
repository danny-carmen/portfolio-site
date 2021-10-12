import React from "react";
import axios from "axios";

const Blog = () => {
  console.log("Starting Request");
  //get blogposts

  //ten at a time

  //

  axios
    .get("https://gist.github.com/danny-carmen/gists/starred")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));

  return <div>Blog</div>;
};

export default Blog;

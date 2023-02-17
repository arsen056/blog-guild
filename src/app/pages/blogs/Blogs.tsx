import React from 'react';
import {BlogItem} from "../../../common/components/blogItem/BlogItem";
import s from './Blogs.module.css'
export const Blogs = () => {
  return (
    <div id='blog-list' className={`container ${s.blogList}`}>
      <BlogItem/>
    </div>
  );
};

import React, {useEffect} from 'react';
import {BlogItem} from "common/components/blogItem/BlogItem";

import s from './Blogs.module.css'
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {fetchBlogs} from "./blogsSlice";
export const Blogs = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBlogs())
  },[])

  return (
    <div id='blog-list' className={`container ${s.blogList}`}>
      <BlogItem/>
    </div>
  );
};

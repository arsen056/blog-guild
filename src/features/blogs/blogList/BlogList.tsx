import React from 'react';
import s from './BlogList.module.css'
import {useSelector} from "react-redux";
import {selectBlogs} from "features/blogs/selectors";
import {BlogItem} from "common/components/blogItem/BlogItem";

export const BlogList = () => {
  const blogs = useSelector(selectBlogs)

  const blogsMap = blogs.map(blog =>
    <BlogItem
      key={blog.id}
      name={blog.name}
      description={blog.description}
      websiteUrl={blog.websiteUrl}
      createdAt={blog.createdAt}/>)

  return (
    <div id='blog-list' className={s.blogList}>
      {blogsMap}
    </div>
  );
};

import React from 'react';
import s from './BlogList.module.css'
import {useSelector} from "react-redux";
import {selectBlogs} from "features/blogs/selectors";
import {BlogItem} from "common/components/blogItem/BlogItem";
import {selectIsLoading} from "app/selectors";

export const BlogList = () => {
  const blogs = useSelector(selectBlogs)
  const isLoading = useSelector(selectIsLoading)

  const blogsMap = blogs.map(blog =>
    <BlogItem
      blogID={blog.id}
      key={blog.id}
      name={blog.name}
      description={blog.description}
      websiteUrl={blog.websiteUrl}
      createdAt={blog.createdAt}/>)

  const blogsMapSceletons = [1,2,3,4,5].map(num => {
    return <BlogItem key={num} blogID={String(num)} name='' description='' websiteUrl='' createdAt='' isLoading={true} />
  })

  return (
    <div id='blog-list' className={s.blogList}>
      {isLoading ? blogsMapSceletons : blogsMap}
    </div>
  );
};

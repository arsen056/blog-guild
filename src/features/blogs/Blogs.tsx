import React, {useEffect} from 'react';
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {fetchBlogs} from "./blogsSlice";
import {BlogList} from "features/blogs/blogList/BlogList";
import {SearchInput} from "common/components/searchInput/SearchInput";

export const Blogs = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBlogs())
  },[])

  return (
    <div>
      <SearchInput />
      <BlogList/>
    </div>
  );
};

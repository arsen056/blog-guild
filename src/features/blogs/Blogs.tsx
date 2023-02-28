import React, {useEffect} from 'react';
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {fetchBlogs} from "./blogsSlice";
import {BlogList} from "features/blogs/blogList/BlogList";
import {InputCustom} from "common/components/inputCustom/InputCustom";

export const Blogs = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBlogs())
  },[])

  return (
    <div>
      <InputCustom placeholder={'Search'}/>
      <BlogList/>
    </div>
  );
};

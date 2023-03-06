import React, {useEffect} from 'react';
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {fetchBlogs} from "./blogsSlice";
import {BlogList} from "features/blogs/blogList/BlogList";
import {useSelector} from "react-redux";
import {selectPageSize, selectSearchName, selectSortDirection} from "features/blogs/selectors";
import {HeaderBlogs} from "features/blogs/headerBlogs/HeaderBlogs";

export const Blogs = () => {
  const dispatch = useAppDispatch()

  const searchName = useSelector(selectSearchName)
  const sordDirection = useSelector(selectSortDirection)
  const pageSize = useSelector(selectPageSize)

  useEffect(() => {
    dispatch(fetchBlogs())
  },[searchName, sordDirection, pageSize])

  return (
    <div>
      <HeaderBlogs />
      <BlogList/>
    </div>
  );
};

import React, {useEffect} from 'react';
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {fetchBlogs} from "./blogsSlice";
import {BlogList} from "features/blogs/blogList/BlogList";
import {SearchInput} from "common/components/searchInput/SearchInput";
import {useSelector} from "react-redux";
import {selectSearchName} from "features/blogs/selectors";

export const Blogs = () => {
  const dispatch = useAppDispatch()

  const searchName = useSelector(selectSearchName)

  useEffect(() => {
    dispatch(fetchBlogs())
  },[searchName])

  return (
    <div>
      <SearchInput />
      <BlogList/>
    </div>
  );
};

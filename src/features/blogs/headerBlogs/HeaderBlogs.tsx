import React from 'react';
import {SearchInput} from "common/components/searchInput/SearchInput";
import s from './HeaderBlogs.module.css'
import {SortSelect} from "features/components/sortSelect/SortSelect";
import {setSortDirection} from "features/blogs/blogsSlice";


export const HeaderBlogs = () => {

  return (
    <div className={s.row}>
      <SearchInput />
      <SortSelect className={s.select} setSortDirection={setSortDirection} />
    </div>
  );
};

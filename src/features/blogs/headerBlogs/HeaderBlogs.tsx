import React from 'react';
import {SearchInput} from "common/components/searchInput/SearchInput";
import s from './HeaderBlogs.module.css'
import {OptionsType, SortSelect} from "features/components/sortSelect/SortSelect";

const options = [
  { value: 'desc', label: 'New post first' },
  { value: 'asc', label: 'Old post first' }
] as OptionsType[]

export const HeaderBlogs = () => {

  return (
    <div className={s.row}>
      <SearchInput />
      <SortSelect className={s.select} options={options} />
    </div>
  );
};

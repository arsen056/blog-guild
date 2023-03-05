import React from 'react';
import {SearchInput} from "common/components/searchInput/SearchInput";
import Select from "react-select";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {setSortDirection} from "features/blogs/blogsSlice";

const options = [
  { value: 'desc', label: 'New post first' },
  { value: 'asc', label: 'Old post first' }
]

export const HeaderBlogs = () => {

  const dispatch = useAppDispatch()

  const onChangeSelect = (e: any) => {
    dispatch(setSortDirection({sortDirection: e.value }))
  }

  return (
    <div>
      <SearchInput />
      <Select options={options} onChange={onChangeSelect} defaultValue={options[0]} />
    </div>
  );
};

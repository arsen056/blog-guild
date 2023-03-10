import React, {FC} from 'react';
import {useAppDispatch} from "common/hooks/useAppDispatch";
import Select, {SingleValue} from "react-select";
import {setSortDirection} from "features/blogs/blogsSlice";
import {setSortDirectionPosts} from "features/posts/postsSlice";

const options = [
  { value: 'desc', label: 'New first' },
  { value: 'asc', label: 'Old first' }
] as OptionsType[]

type OptionsType = {
  value: 'asc' | 'desc'
  label: string
}

type sortDirections = ReturnType<typeof setSortDirection> | ReturnType<typeof setSortDirectionPosts>

type Props = {
  className?: string
  setSortDirection: (sort: {sortDirection: 'asc' | 'desc'}) => sortDirections
}

export const SortSelect:FC<Props> = ({className, setSortDirection}) => {

  const dispatch = useAppDispatch();

  const onChangeSelect = (e: SingleValue<OptionsType>) => {
    if (!e) return
    dispatch(setSortDirection({ sortDirection: e.value }))
  }

  return <Select className={className} options={options} onChange={onChangeSelect} defaultValue={options[0]} />
};

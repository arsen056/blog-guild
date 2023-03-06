import React, {FC} from 'react';
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {setSortDirection} from "features/blogs/blogsSlice";
import Select, {SingleValue} from "react-select";

export type OptionsType = {
  value: 'asc' | 'desc'
  label: string
}

type Props = {
  options: OptionsType[]
  className?: string
}
export const SortSelect:FC<Props> = ({options, className}) => {
  const dispatch = useAppDispatch()

  const onChangeSelect = (e: SingleValue<OptionsType>) => {
    if (!e) return
    dispatch(setSortDirection({ sortDirection: e.value }))
  }

  return <Select className={className} options={options} onChange={onChangeSelect} defaultValue={options[0]} />
};


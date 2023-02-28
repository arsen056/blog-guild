import React, {ChangeEvent, useEffect, useState} from 'react';
import {InputCustom} from "common/components/inputCustom/InputCustom";
import {useDebounce} from "common/hooks/useDebounce";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {setSearchName} from "features/blogs/blogsSlice";

export const SearchInput = () => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState<string>('')

  const debouncedValue = useDebounce<string>(value, 1000)

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    dispatch(setSearchName({searchName: value}))
  }, [debouncedValue])

  return <InputCustom onChange={onChangeHandler} placeholder='Search' fullWidth={true}/>;
};

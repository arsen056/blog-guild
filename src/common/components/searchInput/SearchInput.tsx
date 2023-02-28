import React, {ChangeEvent, useEffect, useState} from 'react';
import {InputCustom} from "common/components/inputCustom/InputCustom";
import {useDebounce} from "common/hooks/useDebounce";

export const SearchInput = () => {
  const [value, setValue] = useState<string>('')

  const debouncedValue = useDebounce<string>(value, 1000)

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    console.log(value)
  }, [debouncedValue])

  return <InputCustom onChange={onChangeHandler} placeholder='Search'/>;
};

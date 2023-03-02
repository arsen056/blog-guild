import React, {useEffect} from 'react';
import s from './BlogPage.module.css'
import {useParams} from "react-router-dom";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {getBlog} from "features/blogPage/blogPageSlice";
import {useSelector} from "react-redux";
import {selectBlog} from "features/blogPage/selectors";

export const BlogPage = () => {

  const dispatch = useAppDispatch()

  const {id} = useParams()

  const blog = useSelector(selectBlog)

  useEffect(() => {
    dispatch(getBlog(id || ''))
  }, [])

  return (
    <div>
      <div className={s.cover}>Image</div>
    </div>
  );
};

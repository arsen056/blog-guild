import React, {useEffect} from 'react';
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {fetchPosts, setSortDirectionPosts} from "features/posts/postsSlice";
import {PostList} from "features/components/postList/PostList";
import {useSelector} from "react-redux";
import {selectPosts, selectSortDirectionPosts} from "features/posts/selectors";
import {SortSelect} from "features/components/sortSelect/SortSelect";
import s from './Posts.module.css'

export const Posts = () => {
  const dispatch = useAppDispatch()
  const posts = useSelector(selectPosts)
  const sortDirection = useSelector(selectSortDirectionPosts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [sortDirection])

  return (
    <div>
      <div className={s.selectWrapper}>
        <SortSelect setSortDirection={setSortDirectionPosts} />
      </div>

      <PostList posts={posts}/>
    </div>
  );
};

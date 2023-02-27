import React, {useEffect} from 'react';
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {fetchPosts} from "features/posts/postsSlice";
import {PostList} from "features/posts/postList/PostList";

export const Posts = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <div>
      <PostList/>
    </div>
  );
};

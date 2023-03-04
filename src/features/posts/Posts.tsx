import React, {useEffect} from 'react';
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {fetchPosts} from "features/posts/postsSlice";
import {PostList} from "features/components/postList/PostList";
import {useSelector} from "react-redux";
import {selectPosts} from "features/posts/selectors";

export const Posts = () => {
  const dispatch = useAppDispatch()
  const posts = useSelector(selectPosts)
  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <div>
      <PostList posts={posts}/>
    </div>
  );
};

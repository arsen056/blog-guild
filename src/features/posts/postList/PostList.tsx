import React from 'react';
import {useSelector} from "react-redux";
import {selectPosts} from "features/posts/selectors";
import {PostItem} from "common/components/postItem/PostItem";
import s from './PostList.module.css'

export const PostList = () => {

  const posts = useSelector(selectPosts)

  const postsMap = posts.map(post => <PostItem key={post.id} blogName={post.blogName} title={post.title} date={post.createdAt}/>)

  return (
    <div className={s.postsWrapper}>
      {postsMap}
    </div>
  );
};

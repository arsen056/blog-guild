import React, {FC} from 'react';
import {PostItem} from "common/components/postItem/PostItem";
import s from 'features/components/postList/PostList.module.css'
import {PostType} from "features/posts/types";

type Props = {
  posts: PostType[]
}

export const PostList:FC<Props> = ({posts}) => {

  const postsMap = posts.map(post => <PostItem key={post.id} id={post.id} blogName={post.blogName} title={post.title} date={post.createdAt}/>)

  return (
    <div className={s.postsWrapper}>
      {postsMap}
    </div>
  );
};

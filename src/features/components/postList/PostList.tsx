import React, {FC} from 'react';
import {PostItem} from "common/components/postItem/PostItem";
import s from 'features/components/postList/PostList.module.css'
import {PostType} from "features/posts/types";
import {useSelector} from "react-redux";
import {selectIsLoading} from "app/selectors";

type Props = {
  posts: PostType[]
}

export const PostList:FC<Props> = ({posts}) => {

  const isLoading = useSelector(selectIsLoading)

  const postsMap = posts.map(post => <PostItem key={post.id} id={post.id} blogName={post.blogName} title={post.title} date={post.createdAt}/>)

  const sceletons = [1,2,3,4,5,6,7,8,9].map(p => <PostItem id={''} blogName={''} title={''} date={''} isLoading={true}/> )

  return (
    <div className={s.postsWrapper}>
      {isLoading ? sceletons : postsMap}
    </div>
  );
};

import React, {FC} from 'react';
import {PostItem} from "common/components/postItem/PostItem";
import s from 'features/components/postList/PostList.module.css'
import { GetPostsResponseType } from "features/posts/types";
import {useSelector} from "react-redux";
import {Button} from "common/components/button/Button";
import {selectIsLoadingPosts} from "features/posts/selectors";

type Props = {
  posts: GetPostsResponseType
  showMore: () => void
}

export const PostList: FC<Props> = ({posts, showMore}) => {
  const isLoading = useSelector(selectIsLoadingPosts)
  const {items, page, pagesCount} = posts

  const postsMap = items.length ?  items.map(post => {
    return <PostItem key={post.id} id={post.id} blogName={post.blogName} title={post.title} date={post.createdAt}/>
  }) : <h2>Post list empty</h2>

  const sceletons = [1, 2, 3, 4, 5, 6].map(p => {
    return <PostItem key={p} id={''} blogName={''} title={''} date={''} isLoading={true}/>
  })

  const showMoreHandler = () => showMore()

  return (
    <>
      <div className={s.postsWrapper}>
        {isLoading ? sceletons : postsMap}
      </div>
      <div className='centered'>
        {items.length ? <Button disabled={page === pagesCount} onClick={showMoreHandler}>Show more</Button> : ''}
      </div>
    </>
  );
};

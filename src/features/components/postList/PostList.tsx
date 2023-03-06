import React, {FC} from 'react';
import {PostItem} from "common/components/postItem/PostItem";
import s from 'features/components/postList/PostList.module.css'
import {PostType} from "features/posts/types";
import {useSelector} from "react-redux";
import {selectIsLoading} from "app/selectors";
import {Button} from "common/components/button/Button";
import {selectPage, selectPagesCount, selectPageSize} from "features/posts/selectors";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {showMorePosts} from "features/posts/postsSlice";

type Props = {
  posts: PostType[]
}

export const PostList: FC<Props> = ({posts}) => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectIsLoading)
  const pageSize = useSelector(selectPageSize)
  const page = useSelector(selectPage)
  const pagesCount = useSelector(selectPagesCount)

  const postsMap = posts.map(post => {
    return <PostItem key={post.id} id={post.id} blogName={post.blogName} title={post.title} date={post.createdAt}/>
  })

  const sceletons = [1, 2, 3, 4, 5, 6].map(p => {
    return <PostItem key={p} id={''} blogName={''} title={''} date={''} isLoading={true}/>
  })

  const showMore = () => {
    dispatch(showMorePosts({pageSize: pageSize + 6}))
  }

  return (
    <>
      <div className={s.postsWrapper}>
        {isLoading ? sceletons : postsMap}
      </div>
      <div className='centered'>
        <Button disabled={page === pagesCount} onClick={showMore}>Show more</Button>
      </div>
    </>
  );
};

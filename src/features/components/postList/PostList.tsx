import React, {FC} from 'react';
import {PostItem} from "common/components/postItem/PostItem";
import s from 'features/components/postList/PostList.module.css'
import {PostType} from "features/posts/types";
import {useSelector} from "react-redux";
import {selectIsLoading} from "app/selectors";
import {Button} from "common/components/button/Button";
import { selectPage, selectPagesCount } from "features/posts/selectors";

type Props = {
  posts: PostType[]
  showMore: () => void
}

export const PostList: FC<Props> = ({posts, showMore}) => {
  const isLoading = useSelector(selectIsLoading)

  const page = useSelector(selectPage)
  const pagesCount = useSelector(selectPagesCount)

  const postsMap = posts.map(post => {
    return <PostItem key={post.id} id={post.id} blogName={post.blogName} title={post.title} date={post.createdAt}/>
  })

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
        <Button disabled={page === pagesCount} onClick={showMoreHandler}>Show more</Button>
      </div>
    </>
  );
};

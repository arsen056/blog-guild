import React, {useEffect} from 'react';
import s from './BlogPage.module.css'
import {useParams} from "react-router-dom";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {getBlog, getPostsForBlog} from "features/blogPage/blogPageSlice";
import {useSelector} from "react-redux";
import {selectBlog, selectPostsByBlog} from "features/blogPage/selectors";
import {BlogItem} from "common/components/blogItem/BlogItem";
import {PostList} from "features/components/postList/PostList";
import {selectIsLoading} from "app/selectors";
import {selectPageSize} from "features/postPage/selectors";

export const BlogPage = () => {

  const dispatch = useAppDispatch()

  const {id} = useParams()

  const isLoading = useSelector(selectIsLoading)
  const blog = useSelector(selectBlog)
  const posts = useSelector(selectPostsByBlog)
  const pageSize = useSelector(selectPageSize)

  const blogItem = isLoading
    ? <BlogItem
      blogID={''}
      name={''}
      websiteUrl={''}
      description={''}
      createdAt={''}
      isLoading={true}
      opened={false}/>
    : <BlogItem
      blogID={blog.id}
      name={blog.name}
      websiteUrl={blog.websiteUrl}
      description={blog.description}
      createdAt={blog.createdAt}
      opened={true}
    />

  useEffect(() => {
    if (id) {
      dispatch(getBlog(id))
      dispatch(getPostsForBlog({id, pageSize: 6}))
    }
  },  [])

  const showMore = () => {
    if (id) dispatch(getPostsForBlog({id, pageSize: pageSize + 3}))
  }

  return (
    <div>
      {/*<div className={s.cover}>Image</div>*/}
      {blogItem}
      <div className={s.line}></div>
      <PostList posts={posts} showMore={showMore} />
    </div>
  );
};

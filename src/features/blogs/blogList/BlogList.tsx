import React from 'react';
import s from './BlogList.module.css'
import {useSelector} from "react-redux";
import {selectBlogs, selectPage, selectPageCount, selectPageSize} from "features/blogs/selectors";
import {BlogItem} from "common/components/blogItem/BlogItem";
import {selectIsLoading} from "app/selectors";
import {Button} from "common/components/button/Button";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {setMorePageSize} from "features/blogs/blogsSlice";

export const BlogList = () => {
  const dispatch = useAppDispatch()
  const blogs = useSelector(selectBlogs)
  const isLoading = useSelector(selectIsLoading)
  const pageSize = useSelector(selectPageSize)
  const pageCount = useSelector(selectPageCount)
  const page = useSelector(selectPage)

  const blogsMap = blogs.map(blog =>
    <BlogItem
      blogID={blog.id}
      key={blog.id}
      name={blog.name}
      description={blog.description}
      websiteUrl={blog.websiteUrl}
      createdAt={blog.createdAt}
      opened={false}
    />)

  const blogsMapSceletons = [1,2,3,4,5].map(num => {
    return <BlogItem key={num} blogID={String(num)} name='' description='' websiteUrl='' createdAt='' isLoading={true} opened={false}/>
  })

  const showMoreHandler = () => dispatch(setMorePageSize({pageSize: pageSize + 6}))

  return (
    <div id='blog-list' className={s.blogList}>
      {isLoading ? blogsMapSceletons : blogsMap}
      <div className={s.button}>
        <Button disabled={page === pageCount} onClick={showMoreHandler}>Show more</Button>
      </div>
    </div>
  );
};

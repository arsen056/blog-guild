import React, {useEffect} from 'react';
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {fetchPosts, setSortDirectionPosts} from "features/posts/postsSlice";
import {PostList} from "features/components/postList/PostList";
import {useSelector} from "react-redux";
import {selectPosts, selectSortDirectionPosts} from "features/posts/selectors";
import {OptionsType, SortSelect} from "features/components/sortSelect/SortSelect";

const options = [
  { value: 'desc', label: 'New first' },
  { value: 'asc', label: 'Old first' }
] as OptionsType[]

export const Posts = () => {
  const dispatch = useAppDispatch()
  const posts = useSelector(selectPosts)
  const sortDirection = useSelector(selectSortDirectionPosts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [sortDirection])

  return (
    <div>
      <SortSelect options={options} setSortDirection={setSortDirectionPosts} />
      <PostList posts={posts}/>
    </div>
  );
};

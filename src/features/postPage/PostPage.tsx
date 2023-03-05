import React, {useEffect} from 'react';
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {fetchPost} from "features/postPage/postPageSlice";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectPost} from "features/postPage/selectors";

export const PostPage = () => {
  const dispatch = useAppDispatch()
  const {postID} = useParams()
  const post = useSelector(selectPost)

  useEffect(() => {
    dispatch(fetchPost(postID || ''))
  }, [])

  return (
    <div>
      <span>blog: {post.blogName}</span>
      <h2>{post.title}</h2>
      <span>{post.createdAt}</span>
      <p>{post.shortDescription}</p>
    </div>
  );
};

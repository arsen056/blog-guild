import React, {FC} from 'react';
import s from './BlogItem.module.css'
import {Link} from "react-router-dom";
import {PATHS} from "common/routes/PATHS";

type BlogItemType = {
  blogID: string
  name: string
  websiteUrl: string
  description: string
  createdAt: string
  img?: string
  isLoading?: boolean
}

export const BlogItem:FC<BlogItemType> = ({blogID, name, websiteUrl, description,  isLoading}) => {

  const isLoadingClassName = isLoading ? s.isLoading : ''

  return (
    <div className={`${s.blogItem} ${isLoadingClassName}`}>
      <div id='blog-img' className={s.imgWrapper}>
        <img src={'https://via.placeholder.com/300'} alt="blog"/>
      </div>

      <div className={s.blogInfo}>
        <Link to={`${PATHS.BLOGS}/${blogID}`}>{name}</Link>
        <p className={s.website}>
          Website: <a href={websiteUrl}>{websiteUrl}</a>
        </p>
        <p className={s.description}>
          {description}
        </p>
      </div>
    </div>
  );
};

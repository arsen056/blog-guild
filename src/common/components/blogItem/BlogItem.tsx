import React, {FC} from 'react';
import s from './BlogItem.module.css'
import {Link} from "react-router-dom";
import {PATHS} from "common/routes/PATHS";
import blogImg from 'common/assets/blog.webp'

type BlogItemType = {
  blogID: string
  name: string
  websiteUrl: string
  description: string
  createdAt: string
  img?: string
  isLoading?: boolean
  opened: boolean
}

export const BlogItem: FC<BlogItemType> =
  ({
     blogID, name, websiteUrl, description, isLoading, opened,
   }) => {

    const isLoadingClassName = isLoading ? s.isLoading : ''

    const title = opened ? <h3>{name}</h3> : <Link to={`${PATHS.BLOGS}/${blogID}`}>{name}</Link>

    return (
      <div className={`${s.blogItem} ${isLoadingClassName}`}>
        <div id='blog-img' className={s.imgWrapper}>
          <img src={blogImg} alt="blog"/>
        </div>

        <div className={s.blogInfo}>
          {title}
          <p className={s.website}>
            Website: <a href={websiteUrl}>{websiteUrl}</a>
          </p>
          <p className={s.description}>
            {description}
          </p>
          {opened && <button>Show more</button>}
        </div>
      </div>
    );
  };

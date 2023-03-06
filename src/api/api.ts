import axios from "axios";
import {BlogType, GetBlogsResponseType} from "features/blogs/types";
import {GetPostsResponseType, PostType} from "features/posts/types";

const instance = axios.create({
  baseURL: 'https://blogs-and-posts-ver2-dgfu.vercel.app/'
})

export const API = {
  getBlogs (params: any) {
    return instance.get<GetBlogsResponseType>('blogs', {params} )
  },
  getBlog(id: string) {
    return instance.get<BlogType>(`blogs/${id}`)
  },
  getPostsForBlog(blogID: string) {
    return instance.get<GetPostsResponseType>(`blogs/${blogID}/posts`)
  },
  getPosts(params: any) {
    return instance.get<GetPostsResponseType>('posts', {params})
  },
  getPost(id: string) {
    return instance.get<PostType>(`posts/${id}`)
  }
}

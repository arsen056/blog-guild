import axios from "axios";
import {BlogType, GetBlogsResponseType} from "features/blogs/types";
import {GetPostsResponseType} from "features/posts/types";

const instance = axios.create({
  baseURL: 'https://blogs-and-posts-ver2-dgfu.vercel.app/'
})

export const API = {
  getBlogs (params: any) {
    return instance.get<GetBlogsResponseType>('blogs', {params} )
  },
  getPosts() {
    return instance.get<GetPostsResponseType>('posts')
  },
  getBlog(id: string) {
    return instance.get<BlogType>(`blogs/${id}`)
  }
}

import {RootStateType} from "app/store";
import {BlogType} from "features/blogs/types";
import {PostType} from "features/posts/types";

export const selectBlog = (state: RootStateType): BlogType => state.blog.blog
export const selectPostsByBlog = (state: RootStateType): PostType[] => state.blog.posts
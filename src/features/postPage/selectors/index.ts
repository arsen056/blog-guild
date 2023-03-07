import {RootStateType} from "app/store";
import {PostType} from "features/posts/types";

export const selectPost = (state: RootStateType): PostType => state.post.post
export const selectPageSize = (state: RootStateType): number => state.blog.posts.pageSize
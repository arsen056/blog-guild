import {RootStateType} from "app/store";
import {BlogType} from "features/blogs/types";

export const selectBlog = (state: RootStateType): BlogType => state.blog.blog

import {RootStateType} from "app/store";
import {BlogType} from "features/blogs/types";

export const selectBlogs = (state: RootStateType): BlogType[] => state.blogs.blogs
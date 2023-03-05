import {RootStateType} from "app/store";
import {BlogType} from "features/blogs/types";

export const selectBlogs = (state: RootStateType): BlogType[] => state.blogs.blogs
export const selectSearchName = (state: RootStateType): string => state.blogs.searchParams.searchNameTerm
export const selectSortDirection = (state: RootStateType): string => state.blogs.searchParams.sortDirection
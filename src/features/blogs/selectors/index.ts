import {RootStateType} from "app/store";
import {BlogType} from "features/blogs/types";

export const selectBlogs = (state: RootStateType): BlogType[] => state.blogs.blogs
export const selectSearchName = (state: RootStateType): string => state.blogs.searchParams.searchNameTerm
export const selectSortDirection = (state: RootStateType): string => state.blogs.searchParams.sortDirection
export const selectPageSize = (state: RootStateType): number => state.blogs.searchParams.pageSize
export const selectPageCount = (state: RootStateType): number => state.blogs.pagesCount
export const selectPage = (state: RootStateType): number => state.blogs.page
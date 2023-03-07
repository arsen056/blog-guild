import {RootStateType} from "app/store";
import {GetPostsResponseType} from "features/posts/types";

export const selectPosts = (state: RootStateType): GetPostsResponseType => state.posts
export const selectSortDirectionPosts = (state: RootStateType): 'asc' | 'desc' => state.posts.searchParams.sortDirection
export const selectPageSize = (state: RootStateType): number => state.posts.pageSize
export const selectPage = (state: RootStateType): number => state.posts.page
export const selectPagesCount = (state: RootStateType): number => state.posts.pagesCount
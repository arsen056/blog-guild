import {RootStateType} from "app/store";
import {PostType} from "features/posts/types";

export const selectPosts = (state: RootStateType): PostType[] => state.posts.posts
import {RootStateType} from "app/store";
import {PostType} from "features/posts/types";

export const selectPost = (state: RootStateType): PostType => state.post.post
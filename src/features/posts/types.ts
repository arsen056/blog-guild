export type GetPostsResponseType = {
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: PostType[];
}

export type PostType = {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  blogId: string;
  blogName: string;
  createdAt: string;
  extendedLikesInfo: LikesInfo;
}

export type LikesInfo = {
  likesCount: number;
  dislikesCount: number;
  myStatus: string;
  newestLikes: any[];
}


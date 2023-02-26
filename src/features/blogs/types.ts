export type BlogType = {
  id: string;
  name: string;
  description: string;
  websiteUrl: string;
  createdAt: string;
}

export type GetBlogsResponseType = {
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: BlogType[];
}
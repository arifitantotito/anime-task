export interface GetAnimes {
  Page: Page;
}

interface Page {
  media: Media[];
  pageInfo: PageInfo;
}

export interface Media {
  bannerImage: string;
  coverImage: CoverImage;
  id: number;
  title: Title;
  description: string;
}

interface Title {
  english?: string;
  romaji: string;
}

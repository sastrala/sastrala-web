// define interface
export interface Podcast {
  id?: string;
  title?: string;
  description?: string;
  published?: string;
  link?: string | null;
  author?: string;
}
export interface PodcastFeed {
  url: string | undefined;
  title: string | undefined;
  link: string | undefined;
  description: string | undefined;
  image: string | undefined;
}
export interface PodcastData {
  feed?: PodcastFeed;
  items?: Podcast[];
}
export interface State_Podcast {
  podcast_loading: boolean;
  podcast_selected: Podcast;
  podcast_data: PodcastData;
}

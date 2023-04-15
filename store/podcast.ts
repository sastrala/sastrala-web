// pinia
import { defineStore } from "pinia";

// xml js
import { parse } from "rss-to-json";

// interface
import {
  Podcast,
  PodcastData,
  State_Podcast
} from "@/constant/podcast.constant";

// define interface

export const usePodcastStore = defineStore("podcast", {
  state: (): State_Podcast => {
    return {
      podcast_loading: false,
      podcast_data: {},
      podcast_selected: {}
    };
  },

  actions: {
    /**
     * @description Get Podcast RSS data
     *
     * @method GET
     * @url https://anchor.fm/s/2d2dda98/podcast/rss
     * @access public
     *
     * @return {any}
     */
    async podcast_getData(): Promise<any> {
      this.podcast_loading = true;

      try {
        const response = await parse(
          "https://anchor.fm/s/2d2dda98/podcast/rss"
        );
        const data = response;

        const mapPodcast: PodcastData = {
          feed: {
            url: data?.link,
            title: data?.title,
            link: data?.link,
            description: data?.description,
            image: data?.image
          },
          items: data?.items.map(data => {
            return {
              id: data?.id,
              title: data?.title,
              description: data?.description,
              published: data?.published,
              link: data?.link
                ? "https://podcasters.spotify.com/pod/show/sastrala/embed/episodes/" +
                  data.link.substring(data.link.lastIndexOf("/") + 1)
                : null,
              author: data?.author
            };
          })
        };

        this.podcast_selected = mapPodcast?.items ? mapPodcast?.items[0] : {};
        this.podcast_data = mapPodcast;

        return Promise.resolve(response);
      } catch (err) {
        return Promise.reject(err);
      } finally {
        this.podcast_loading = false;
      }
    },

    /**
     * @description for select the podcast data
     *
     * @param {Object} payload
     */
    podcast_selectEpisode(payload: Podcast) {
      this.podcast_selected = payload;
    }
  }
});

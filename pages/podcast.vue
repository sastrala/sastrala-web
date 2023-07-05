<template>
  <section v-if="podcast_loading" class="text-center">
    <LoadContent />
  </section>
  <section v-else class="max-w-lg mx-auto">
    <section class="flex items-center justify-center">
      <img
        :src="feedPodcast?.image"
        :alt="`Cover Podcast ${feedPodcast?.title}`"
        class="mr-3 mb-2 h-24 w-24 rounded-lg shadow-md"
      />
      <div class="text-4xl font-bold">
        <h1>{{ feedPodcast?.title }}</h1>
      </div>
    </section>

    <div class="px-3">
      <section class="my-5 text-center">
        <div class="items-end relative bg-gray-200">
          <iframe
            id="player"
            title="Podcast Player from Anchor"
            class="frame-custom shadow-xl"
            :src="
              podcast_selected.link
                ? podcast_selected.link
                : '@/assets/icon.png'
            "
            frameborder="0"
            scrolling="no"
            height="100px"
          />
        </div>

        <div
          class="text-left prose my-8"
          v-html="podcast_selected.description"
        />
      </section>

      <div class="border-b-4 border-dashed border-gray-300 mb-5" />

      <section class="mb-3">
        <div class="border-b border-gray-300">
          <ul class="flex flex-wrap -mb-px">
            <li class="mr-2">
              <button
                class="inline-block py-2 px-4 text-center rounded-t-lg border-b-2"
                :class="{
                  'text-blue-600 border-blue-600 font-medium active': tab === 1,
                  'text-gray-500 border-transparent font-medium hover:text-gray-600 hover:border-gray-300':
                    tab !== 1,
                }"
                @click="tab = 1"
              >
                Daftar Episode
              </button>
            </li>
            <li class="mr-2">
              <button
                class="inline-block py-2 px-4 text-center rounded-t-lg border-b-2"
                :class="{
                  'text-blue-600 border-blue-600 font-medium active': tab === 2,
                  'text-gray-500 border-transparent font-medium hover:text-gray-600 hover:border-gray-300':
                    tab !== 2,
                }"
                @click="tab = 2"
              >
                Tentang
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section v-if="tab == 1">
        <div class="flex flex-col pl-0 mb-3 rounded -ml-4 lg:-ml-0">
          <button
            v-for="data in listPodcast"
            :key="data.id"
            class="text-left flex justify-between items-center pl-7 lg:pl-4 py-3 px-3 rounded-r-full lg:rounded-xl focus:outline-none focus:ring focus:ring-blue"
            :class="{
              'bg-blue-100 text-blue-800': podcast_selected.id === data.id,
              'hover:text-blue-600 focus:text-blue-600':
                podcast_selected.id !== data.id,
            }"
            @click="onSelectPodcast(data)"
          >
            {{ data.title }}

            <div>
              <IconRight />
            </div>
          </button>
        </div>
      </section>

      <section v-if="tab == 2" class="my-2">
        <div class="prose" v-html="feedPodcast?.description" />

        <p class="mt-5">
          <b>{{ feedPodcast?.title }}</b> bisa di dengerin juga di
          <a
            class="underline"
            href="https://open.spotify.com/show/1aBp5Z34dyypzOo7rPUxwb"
            target="_blank"
          >
            Spotify</a
          >,
          <a
            class="underline"
            href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yZDJkZGE5OC9wb2RjYXN0L3Jzcw=="
            target="_blank"
          >
            Google Podcast </a
          >,
          <a
            class="underline"
            href="https://podcasts.apple.com/id/podcast/lascast/id1539711269"
            target="_blank"
            >Itunes</a
          >
          dll..
        </p>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
// vue
import { onBeforeMount, computed, ref } from "vue";

// store
import { storeToRefs } from "pinia";
import { usePodcastStore } from "@/store/podcast";

// interface
import { Podcast } from "@/constant/podcast.constant";

// icon
import IconRight from "@/assets/icon/right.svg?component";

// define store
const { podcast_getData, podcast_selectEpisode } = usePodcastStore();
const { podcast_loading, podcast_selected, podcast_data } = storeToRefs(
  usePodcastStore()
);

// define runtime config
const config = useRuntimeConfig();

// define data
const tab = ref(1);
const feedPodcast = computed(() => {
  return podcast_data?.value?.feed;
});
const listPodcast = computed(() => {
  return podcast_data?.value?.items;
});

onBeforeMount(() => {
  onFetchData();
});

/**
 * @description for fetch the data
 *
 * @return {void}
 */
const onFetchData = async () => {
  await podcast_getData();
};

/**
 * @description for get detail podcast from array list
 *
 * @param {object} data
 */
const onSelectPodcast = (data: Podcast) => {
  podcast_selectEpisode(data);
  window.scrollTo(0, 0);
};

useHead({
  title: `Podcast - ${feedPodcast.value?.title} | Sastrala`,
  meta: [
    {
      hid: "title",
      name: "title",
      content: `Podcast - ${feedPodcast.value?.title} | Sastrala`,
    },
    {
      hid: "description",
      name: "description",
      content: `Podcast dari kami yaitu ${feedPodcast.value?.title}`,
    },
    { hid: "og:type", property: "og:type", content: "podcast" },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://sastrala.id/podcast",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: `Podcast - ${feedPodcast.value?.title} | Sastrala`,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: `${feedPodcast.value?.description}`,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: `${feedPodcast.value?.image}`,
    },
  ],
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: "https://sastrala.id/podcast",
    },
  ],
});
</script>

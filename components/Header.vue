<template>
  <header class="flex align-center justify-center bg-transparent">
    <section class="max-w-screen-sm py-5 text-xl">
      <NuxtLink
        class="link-nav ml-2 inline-block no-underline rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        :to="{ name: 'index' }"
      >
        Beranda
      </NuxtLink>
      <NuxtLink
        class="link-nav ml-2 inline-block no-underline rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        :to="{ name: 'podcast' }"
      >
        Podcast
      </NuxtLink>
    </section>
  </header>
</template>

<style scoped>
.link-nav:first-child {
  margin-left: 0;
}
.link-nav:last-child {
  margin-right: 0;
}
.router-link-exact-active {
  background-color: #dbeafe;
  color: #123dab;
  padding: 2px 10px;
}
:not(.router-link-exact-active) {
  margin: 0px 10px;
}
</style>

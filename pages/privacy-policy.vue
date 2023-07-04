<template>
  <section class="container py-10 px-5">
    <ContentRenderer :value="data">
      <h1 class="mb-5 text-2xl font-bold">{{ data.title }}</h1>
      <ContentRendererMarkdown
        class="prose prose-headings:font-serif prose-a:no-underline prose-a:font-bold"
        :value="data"
      />
    </ContentRenderer>
  </section>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("privacy-policy", () =>
  queryContent("/privacy-policy").findOne()
);

useHead({
  title: "Sastrala - Kebijakan Privasi",
});
</script>

<template>
  <footer class="my-5 text-center justify-center">
    <section class="text-sm mb-2">
      <NuxtLink to="privacy-policy">Kebijakan Privasi</NuxtLink>
      •
      <a href="https://tulisan.sastrala.id/about">Tentang</a>
    </section>
    <section class="text-lg">
      <span>© 2018 - {{ new Date().getFullYear() }},</span>
      <a
        class="ml-1 focus:outline-none focus-visible:outline-none focus:ring focus:ring-blue-400 font-bold"
        href="https://www.instagram.com/sastrala.id/"
        target="_blank"
        rel="noopener"
      >
        @sastrala.id
      </a>
    </section>
  </footer>
</template>

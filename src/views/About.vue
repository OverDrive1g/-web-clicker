<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
  export default {
    name: "About",
    metaInfo: {
      title: 'About',
      meta: [
        {name: 'description', content: 'Description of this beautiful clicker. All its features. And also why you should at least make a couple of clicks.'},

        // OpenGraph data (Most widely used)
        {property: 'og:title', content: 'About | Clicker'},
        {property: 'og:site_name', content: 'Clicker'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: 'https://cl1cker.online/about'},
        {property: 'og:image', content: 'https://cl1cker.online/logo.png'},
        {property: 'og:description', content: 'Description of this beautiful clicker. All its features. And also why you should at least make a couple of clicks.'},

        // Twitter card
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: 'https://cl1cker.online/about'},
        {name: 'twitter:title', content: 'About | Clicker'},
        {name: 'twitter:description', content: 'Description of this beautiful clicker. All its features. And also why you should at least make a couple of clicks.'},
        {name: 'twitter:creator', content: '@OverDrive1g'},
        {name: 'twitter:image:src', content: 'https://cl1cker.online/logo.png'},

        // Google / Schema.org markup:
        {itemprop: 'name', content: 'About | Clicker'},
        {itemprop: 'description', content: 'Description of this beautiful clicker. All its features. And also why you should at least make a couple of clicks.'},
        {itemprop: 'image', content: 'https://cl1cker.online/logo.png'}
      ],
      link: [
        {rel: 'canonical', href: 'https://cl1cker.online/about'}
      ]
    }
  }
</script>

<style scoped>

</style>
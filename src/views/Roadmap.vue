<template>
    <v-timeline>
        <v-timeline-item
                v-for="n in 10"
                :key="n"
                color="red lighten-2"
                large
        >
            <v-card class="elevation-2">
                <v-card-title class="headline">Lorem ipsum</v-card-title>
                <v-card-text>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                </v-card-text>
            </v-card>
        </v-timeline-item>
    </v-timeline>
</template>

<script>
    export default {
        name: "Roadmap",
        metaInfo: {
            title: 'Roadmap',
            meta: [
                {name: 'description', content: 'On this page we will describe future plans. And also tell you what has already been done.'},

                // OpenGraph data (Most widely used)
                {property: 'og:title', content: 'Roadmap | Clicker'},
                {property: 'og:site_name', content: 'Clicker'},
                {property: 'og:type', content: 'website'},
                {property: 'og:url', content: 'https://cl1cker.online/roadmap'},
                {property: 'og:image', content: 'https://cl1cker.online/logo.png'},
                {property: 'og:description', content: 'On this page we will describe future plans. And also tell you what has already been done.'},

                // Twitter card
                {name: 'twitter:card', content: 'summary'},
                {name: 'twitter:site', content: 'https://cl1cker.online/roadmap'},
                {name: 'twitter:title', content: 'Roadmap | Clicker'},
                {name: 'twitter:description', content: 'On this page we will describe future plans. And also tell you what has already been done.'},
                {name: 'twitter:creator', content: '@OverDrive1g'},
                {name: 'twitter:image:src', content: 'https://cl1cker.online/logo.png'},

                // Google / Schema.org markup:
                {itemprop: 'name', content: 'Roadmap | Clicker'},
                {itemprop: 'description', content: 'On this page we will describe future plans. And also tell you what has already been done.'},
                {itemprop: 'image', content: 'https://cl1cker.online/logo.png'}
            ],
            link: [
                {rel: 'canonical', href: 'https://www.cl1cker.online/roadmap'}
            ]
        }
    }
</script>

<style scoped>

</style>
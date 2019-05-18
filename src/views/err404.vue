<template>
    <div>
        404 not found
    </div>
</template>

<script>
    export default {
        name: "err404",
        metaInfo: {
            title: '¯\\_(ツ)_/¯ | Page not found',

            meta: [
                {name: 'description', content: 'Ohh Shit! page not found (ノಠ益ಠ)ノ彡┻━┻'},

                // OpenGraph data (Most widely used)
                {property: 'og:title', content: '¯\\_(ツ)_/¯ | Page not found'},
                {property: 'og:site_name', content: 'Clicker'},
                {property: 'og:type', content: 'website'},
                {property: 'og:url', content: 'https://cl1cker.online/about'},
                {property: 'og:image', content: 'https://cl1cker.online/logo.png'},
                {property: 'og:description', content: 'Ohh Shit! page not found (ノಠ益ಠ)ノ彡┻━┻'},

                // Twitter card
                {name: 'twitter:card', content: 'summary'},
                {name: 'twitter:site', content: 'https://cl1cker.online/about'},
                {name: 'twitter:title', content: '¯\\_(ツ)_/¯ | Page not found'},
                {name: 'twitter:description', content: 'Ohh Shit! page not found (ノಠ益ಠ)ノ彡┻━┻'},
                {name: 'twitter:creator', content: '@OverDrive1g'},
                {name: 'twitter:image:src', content: 'https://cl1cker.online/logo.png'},

                // Google / Schema.org markup:
                {itemprop: 'name', content: '¯\\_(ツ)_/¯ | Page not found'},
                {itemprop: 'description', content: 'Ohh Shit! page not found (ノಠ益ಠ)ノ彡┻━┻'},
                {itemprop: 'image', content: 'https://cl1cker.online/logo.png'}
            ],
            link: [
                {rel: 'canonical', href: 'https://cl1cker.online/404'}
            ]
        }
    }
</script>

<style scoped>

</style>
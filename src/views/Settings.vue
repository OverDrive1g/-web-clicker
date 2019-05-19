<template>
    <v-layout align-center justify-center fill-height>
        <v-btn @click.stop="onSave()">
            Save
        </v-btn>
        <v-btn @click.stop="loadDialog = true">
            Load
        </v-btn>

        <v-dialog v-model="saveDialog" width="600px" >
            <v-card>
                <v-card-title class="headline">Save this string</v-card-title>

                <v-card-text>
                    {{uuid}}
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="darken-1" flat="flat" @click="saveDialog = false" >
                        Ok
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="loadDialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">Load data</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex>
                                <v-textarea
                                        name="input-7-1"
                                        label="JSON"
                                        value=""
                                        hint="Place json"
                                        v-model="payload"
                                ></v-textarea>
                            </v-flex>

                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat @click="loadDialog = false">Close</v-btn>
                    <v-btn flat v-on:click="onLoad">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-bottom-sheet v-model="sheet">
            <v-alert
                    :value="true"
                    :type="alertType"
            >
                {{alertText}}
            </v-alert>
        </v-bottom-sheet>
    </v-layout>
</template>

<script>
    import { mapState } from 'vuex'
    import { mapMutations } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        name: "Settings",
        methods:{
            async onSave(){
                this.save()
                    .then(res=>{
                        this.uuid = res.data.response.uuid
                        this.saveDialog = true
                    })
                    .catch(err=>{
                        this.alertText = err.message
                        this.alertType = 'error'
                        this.loadDialog=false
                        this.sheet=true
                    })
            },
            async onLoad(){

                if(this.payload.length === 0) {
                    this.alertText = `Payload can't be null!`
                    this.alertType = 'error'
                    this.loadDialog=false
                    this.sheet=true
                    return;
                }

                await this.load(this.payload)
                    .then(res=>{
                        this.alertType = 'success'
                        this.alertText = 'Loading is done'
                        this.loadDialog=false
                        this.sheet=true
                    })
                    .catch(err=>{
                        this.alertText = err.message
                        this.alertType = 'error'
                        this.loadDialog=false
                        this.sheet=true
                        return;
                    })

                // this.loadSave(payload)


            },
            ...mapMutations(["loadSave"]),
            ...mapActions(['save','load'])
        },
        data(){
            return {
                saveDialog:false,
                loadDialog:false,
                uuid:"",
                payload:"",
                alertType: "success",
                alertText: "",
                sheet:false
            }
        },
        computed: {
            ...mapState(["count","attack","upgradeList"])
        },
        metaInfo: {
            title: 'Settings',
            meta: [
                {name: 'description', content: 'Tell you about the settings? I think it is not necessary. But just in case: here you can customize some things.'},

                // OpenGraph data (Most widely used)
                {property: 'og:title', content: 'Settings | Clicker'},
                {property: 'og:site_name', content: 'Clicker'},
                {property: 'og:type', content: 'website'},
                {property: 'og:url', content: 'https://cl1cker.online/settings'},
                {property: 'og:image', content: 'https://cl1cker.online/logo.png'},
                {property: 'og:description', content: 'Tell you about the settings? I think it is not necessary. But just in case: here you can customize some things.'},

                // Twitter card
                {name: 'twitter:card', content: 'summary'},
                {name: 'twitter:site', content: 'https://cl1cker.online/settings'},
                {name: 'twitter:title', content: 'Settings | Clicker'},
                {name: 'twitter:description', content: 'Tell you about the settings? I think it is not necessary. But just in case: here you can customize some things.'},
                {name: 'twitter:creator', content: '@OverDrive1g'},
                {name: 'twitter:image:src', content: 'https://cl1cker.online/logo.png'},

                // Google / Schema.org markup:
                {itemprop: 'name', content: 'Settings | Clicker'},
                {itemprop: 'description', content: 'Tell you about the settings? I think it is not necessary. But just in case: here you can customize some things.'},
                {itemprop: 'image', content: 'https://cl1cker.online/logo.png'}
            ],
            link: [
                {rel: 'canonical', href: 'https://cl1cker.online/settings'}
            ]
        }
    }
</script>

<style scoped>

</style>
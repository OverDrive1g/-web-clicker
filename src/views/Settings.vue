<template>
    <v-layout align-center justify-center fill-height>
        <v-btn @click.stop="saveDialog = true">
            Save
        </v-btn>
        <v-btn @click.stop="loadDialog = true">
            Load
        </v-btn>

        <v-dialog v-model="saveDialog" width="600px" >
            <v-card>
                <v-card-title class="headline">Save this string</v-card-title>

                <v-card-text>
                    {{JSON.stringify({
                        count: this.count,
                        income: this.income,
                        upgradeList: this.upgradeList
                    })}}
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
                    <v-btn flat v-on:click="load">Save</v-btn>
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

    export default {
        name: "Settings",
        methods:{
            load(){
                console.log(this.payload)

                if(this.payload.length === 0) {
                    this.alertText = `Payload can't be null!`
                    this.alertType = 'error'
                    this.loadDialog=false
                    this.sheet=true
                    return;
                }

                let payload
                try{
                    payload = JSON.parse(this.payload)
                }
                catch (e) {
                    this.alertType = 'error'
                    this.alertText = e.message
                    this.loadDialog=false
                    this.sheet=true
                    return
                }

                if(!payload.count || !payload.income || !payload.upgradeList) {
                    this.alertType = 'error'
                    this.alertText = "Can't load data! "
                    this.loadDialog=false
                    this.sheet=true
                    return
                }

                this.loadSave(payload)

                this.alertType = 'success'
                this.alertText = 'Loading is done'
                this.loadDialog=false
                this.sheet=true
            },
            ...mapMutations(["loadSave"])
        },
        data(){
            return {
                saveDialog:false,
                loadDialog:false,
                payload:"",
                alertType: "success",
                alertText: "",
                sheet:false
            }
        },
        computed: {
            ...mapState(["count","income","upgradeList"])
        },
    }
</script>

<style scoped>

</style>
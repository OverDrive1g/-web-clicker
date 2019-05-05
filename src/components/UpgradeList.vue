<template>
    <v-list two-line>
        <template
                v-for="(item, index) in upgrades"
        >
            <v-divider
                    v-if="index > 0"
                    :key="index"
            ></v-divider>
            <UpgradeItem
                    :upgrade="item"
                    :key="'item' + index"
            />
        </template>
    </v-list>
</template>

<script>
    import axios from 'axios';
    import UpgradeItem from "./UpgradeItem";
    export default {
        name: "UpgradeList",
        components: {UpgradeItem},
        data(){
            return {
                upgrades:[]
            }
        },
        created() {
            axios.get('http://localhost:3000/upgrade')
                .then(response => {
                    console.log(response.data)
                    this.upgrades = response.data
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
</script>

<style scoped>

</style>
<template>
    <v-list two-line>
        <template
                v-for="(item, index) in upgrades"
        >
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
            axios.get('http://213.32.68.143:3000/upgrade')
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
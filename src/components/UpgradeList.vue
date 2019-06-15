<template>
    <v-list two-line>
        <template
                v-for="(item, index) in upgradeList"
        >
            <UpgradeItem
                    :upgrade="item"
                    :key="'item' + index"
            />
        </template>
    </v-list>
</template>

<script>
    import { mapState } from 'vuex'
    import UpgradeItem from "./UpgradeItem"

    export default {
        name: "UpgradeList",
        components: {UpgradeItem},
        computed:{
            ...mapState('player', ['upgradeList']),
        },
        data(){
            return {

            }
        }
    }
</script>

<style scoped>

</style>

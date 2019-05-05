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
    import UpgradeItem from "./UpgradeItem";
    export default {
        name: "UpgradeList",
        components: {UpgradeItem},
        data(){
            return {
                upgrades:[{id:1, text:"test upgrade1"},{id:2, text:"test upgrade2"},{id:3, text:"test upgrade3"},{id:4, text:"test upgrade4"},]
            }
        }
    }
</script>

<style scoped>

</style>